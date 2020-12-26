<script lang="ts">
  import type { Repository } from './github';

  export let repository: Repository;
</script>

<style>
  .counts {
    margin-left: -0.6rem;
    margin-bottom: 0;
  }

  .card-subtitle {
    margin-left: 0.5rem;
    font-size: x-small;
  }
</style>

<div class="card">
  <div class="card-body">
    <p class="counts">
      <span class="badge badge-pill badge-light"><span class="far fa-eye"></span> {repository.watchersCount}</span>
      <span class="badge badge-pill badge-light"><span class="far fa-star"></span> {repository.stargazersCount}</span>
      <span class="badge badge-pill badge-light"><span class="far fa-code-branch"></span> {repository.forksCount}</span>
    </p>
    <h5 class="card-title"><a href="{repository.htmlUrl}">{repository.fullName}</a></h5>
    <h6 class="card-subtitle mb-2 text-muted">
      created:
      {repository.createdAt}
      | updated:
      {repository.updatedAt}
      | pushed:
      {repository.pushedAt}
    </h6>
    <p class="card-text">{repository.description}</p>
    <a href="{repository.htmlUrl}/commits" class="card-link">Commits</a>
    {#if repository.hasIssues}<a href="{repository.htmlUrl}/issues" class="card-link">Issues</a>{/if}
    <a href="{repository.htmlUrl}/pulls" class="card-link">Pull requests</a>
    {#if repository.hasWiki}<a href="{repository.htmlUrl}/wiki" class="card-link">Wiki</a>{/if}
    <a href="{repository.htmlUrl}/releases" class="card-link">Releases</a>
    <a href="{repository.htmlUrl}/tags" class="card-link">Tags</a>
  </div>
</div>
