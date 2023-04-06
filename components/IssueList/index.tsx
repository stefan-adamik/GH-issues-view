import IssueListView from 'my-app/components/IssueList/IssueListView';
import { IssueSortOptionsArray } from 'my-app/constants/issue';
import useRefValue from 'my-app/hooks/common/useRefValue';
import useGetIssuesByRepo from 'my-app/hooks/query/useGetIssuesByRepo';
import debounce from 'my-app/utils/debounce';
import { memo, useEffect, useMemo, useRef } from 'react';

type IssueListProps = {
  owner: string;
  repo: string;
  selectedSortOption: (typeof IssueSortOptionsArray)[number];
};
const offsetToBottom = 100;

const IssueList = ({ owner, repo, selectedSortOption }: IssueListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetching } = useGetIssuesByRepo({
    owner,
    repository: repo,
    options: {
      page: 1,
      perPage: 20,
      sort: selectedSortOption.value.sort,
      direction: selectedSortOption.value.sortDir
    }
  });

  const hasNextPageRef = useRefValue(hasNextPage);
  const isFetchingRef = useRefValue(isFetching);

  const onScrollToBottom = useMemo(
    () =>
      debounce(() => {
        const container = containerRef.current;
        if (container) {
          if (
            container.offsetHeight + container.scrollTop >=
            container.scrollHeight - offsetToBottom
          ) {
            const hasNextPage = hasNextPageRef.current;
            const isFetching = isFetchingRef.current;
            if (hasNextPage && !isFetching) {
              fetchNextPage();
            }
          }
        }
      }, 100),
    [hasNextPageRef, isFetchingRef, containerRef, fetchNextPage]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', onScrollToBottom);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', onScrollToBottom);
      }
    };
  }, [onScrollToBottom]);

  return (
    <IssueListView
      containerRef={containerRef}
      data={data}
      hasNextPage={hasNextPage}
      isFetching={isFetching}
    />
  );
};

export default memo(IssueList);
