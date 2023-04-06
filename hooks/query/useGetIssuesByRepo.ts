import useInfiniteQueryOptions from 'my-app/hooks/common/useInfiniteQueryOptions';
import { fetchIssues } from 'my-app/services/issue';
import { PaginationQueryOptions, PaginationResults } from 'my-app/types/common';
import { Issue } from 'my-app/types/issue';
import { useInfiniteQuery } from 'react-query';

export type UseGetIssuesByRepoProps = {
  owner: string;
  repository: string;
  options: PaginationQueryOptions;
};
const useGetIssuesByRepo = ({
  owner,
  repository,
  options
}: UseGetIssuesByRepoProps) => {
  const queryOptions = useInfiniteQueryOptions<PaginationResults<Issue>>({
    enabled: !!owner && !!repository,
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasNextPage) {
        // No more pages to fetch
        return undefined;
      }

      return {
        page: lastPage.page + 1,
        perPage: lastPage.perPage
      };
    }
  });
  return useInfiniteQuery<PaginationResults<Issue>>(
    [
      'issues',
      owner,
      repository,
      'page',
      options.page,
      'size',
      options.perPage,
      'sort',
      options.sort,
      'sortDir',
      options.direction
    ],
    ({ pageParam }) =>
      fetchIssues(
        owner,
        repository,
        pageParam
          ? {
              ...options,
              ...pageParam
            }
          : options
      ),
    queryOptions
  );
};

export default useGetIssuesByRepo;
