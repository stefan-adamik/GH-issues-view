import { PaginationQueryOptions, PaginationResults } from 'my-app/types/common';
import { Issue } from 'my-app/types/issue';
import * as querystring from 'querystring';

export const fetchIssues = async (
  owner: string,
  repo: string,
  options: PaginationQueryOptions
): Promise<PaginationResults<Issue>> => {
  const { page, perPage, sort, direction } = options;
  const queryString = querystring.stringify({
    page,
    per_page: perPage,
    state: 'all',
    sort,
    direction
  });
  const url = `https://api.github.com/repos/${owner}/${repo}/issues?${queryString}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return { data, page, perPage, hasNextPage: data.length === perPage };
};
