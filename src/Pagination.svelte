<script lang="ts">
  import { toHashString, Location } from './router';
  import { toShowingPageLinks } from './paginator';

  export let location: Location;
  export let totalPage: number;

  $: pageLinks = toShowingPageLinks(location.page, totalPage);
</script>

<style>
  .pagination {
    padding: 0.5rem;
  }
</style>

<ul class="pagination pagination-sm justify-content-center">
  <li class="page-item" class:disabled="{location.page === 1}">
    <a class="page-link" href="{toHashString(location.movePrev())}" tabindex="-1">&laquo</a>
  </li>
  {#each pageLinks as page}
    <li class="page-item" class:disabled="{location.page === page}">
      <a
        class="page-link"
        class:text-white="{location.page === page}"
        class:bg-primary="{location.page === page}"
        href="{toHashString(location.moveTo(page))}"
      >
        <span class:font-weight-bold="{location.page === page}">{page}</span>
      </a>
    </li>
  {/each}
  <li class="page-item" class:disabled="{location.page === totalPage}">
    <a class="page-link" href="{toHashString(location.moveNext())}">&raquo</a>
  </li>
</ul>
