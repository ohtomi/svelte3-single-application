/* eslint camelcase: "off" */

export type GitHubRepository = {
  full_name: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  html_url: string;
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
  has_issues: boolean;
  has_wiki: boolean;
};

export type GetSearchRepositoriesResponse = {
  data: {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubRepository[];
  };
};
