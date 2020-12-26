<script lang="ts">
  import { toHashString, Location } from './router';
  import { autofocus } from './autofocuser';

  export let isSearching: boolean;
  export let location: Location;

  let query = location.query;
  let sort = location.sort;
  let perPage = location.perPage || 20;
  let page = location.page || 1;

  let submitLink: HTMLAnchorElement;

  function keyDown(ev: KeyboardEvent) {
    if (ev.key !== 'Enter') {
      return;
    }
    submitLink.click();
  }
</script>

<svelte:window on:keydown="{keyDown}" />

<div class="container">
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm-6">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Keyword" use:autofocus bind:value="{query}" />
        <div class="input-group-append">
          <a
            bind:this="{submitLink}"
            class="btn btn-outline-secondary"
            href="{isSearching || !query || !query.length ? '#' : toHashString(new Location(query, sort, perPage, page))}"
            disabled="{isSearching}"
          >
            Search
          </a>
        </div>
      </div>
    </div>
    <div class="col-sm"></div>
  </div>
</div>
