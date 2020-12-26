import { request } from '@octokit/request';
import type { GetSearchRepositoriesResponse } from './octokit';

export type Repository = {
  fullName: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  htmlUrl: string;
  watchersCount: number;
  stargazersCount: number;
  forksCount: number;
  hasIssues: boolean;
  hasWiki: boolean;
};

export type SearchResult = {
  repositories: Array<Repository>;
  totalCount: number;
};

function isOk(value: Record<string, unknown>): value is GetSearchRepositoriesResponse {
  return true;
}

export async function searchRepository(
  query: string,
  sort: string,
  perPage: number,
  page: number,
): Promise<SearchResult> {
  const result = await request('/search/repositories', { q: query, sort, per_page: perPage, page });
  if (!isOk(result)) {
    throw new Error('x');
  }
  const response = result as GetSearchRepositoriesResponse;
  const repositories = response.data.items.map((item) => {
    return {
      fullName: item.full_name,
      description: item.description,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      pushedAt: item.pushed_at,
      htmlUrl: item.html_url,
      watchersCount: item.watchers_count,
      stargazersCount: item.stargazers_count,
      forksCount: item.forks_count,
      hasIssues: item.has_issues,
      hasWiki: item.has_wiki,
    };
  });
  return {
    repositories,
    totalCount: response.data.total_count,
  };
}
