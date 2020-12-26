<script lang="ts">
  import Summary from './Summary.svelte';
  import Pagination from './Pagination.svelte';

  import type { Location } from './router';
  import type { Repository } from './github';

  export let repositories: Array<Repository>;
  export let totalCount: number;
  export let totalPage: number;
  export let location: Location;
</script>

{#if repositories && repositories.length}
  <p><span class="text-muted">{totalCount} repositories</span></p>
  {#each repositories as repository}
    <Summary repository="{repository}" />
  {/each}
  <Pagination location="{location}" totalPage="{totalPage}" on:paginate />
{/if}
