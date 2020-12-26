<script lang="ts">
  import Searcher from './Searcher.svelte';
  import Result from './Result.svelte';

  import { parse, Location } from './router';
  import { searchRepository } from './github';
  import type { Repository } from './github';

  // フラグ
  let isSearching: boolean = false;

  // 検索フォーム and/or ロケーション
  let query: string = '';
  let sort: string = '';
  let perPage: number = 0;
  let page: number = 0;

  $: location = new Location(query, sort, perPage, page);

  // GitHub APIレスポンス
  let repositories: Array<Repository>;
  let totalCount: number = 0;
  let totalPage: number = 0;

  async function search(location: Location) {
    try {
      isSearching = true;
      repositories = [];
      totalCount = 0;
      totalPage = 0;

      query = location.query;
      sort = location.sort;
      perPage = location.perPage;
      page = location.page;

      const result = await searchRepository(query, sort, perPage, page);
      repositories = result.repositories;
      totalCount = result.totalCount;
      totalPage = Math.ceil(totalCount / perPage);
    } finally {
      isSearching = false;
    }
  }

  function hashChanged() {
    const location = parse(window.location.hash);
    search(location);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<svelte:window on:hashchange="{hashChanged}" />

<main>
  <h1>GitHub Repository Search</h1>
  <Searcher isSearching="{isSearching}" location="{location}" />
</main>
<Result repositories="{repositories}" totalCount="{totalCount}" totalPage="{totalPage}" location="{location}" />
