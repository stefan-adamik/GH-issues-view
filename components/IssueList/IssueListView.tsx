import IssueRow from 'my-app/components/IssueRow';
import Loader from 'my-app/components/Loader';
import { PaginationResults } from 'my-app/types/common';
import { Issue } from 'my-app/types/issue';
import { Fragment, RefObject } from 'react';
import { InfiniteData } from 'react-query';

type IssueListViewProps = {
  containerRef: RefObject<HTMLDivElement>;
  data: InfiniteData<PaginationResults<Issue>> | undefined;
  hasNextPage?: boolean;
  isFetching?: boolean;
};
const IssueListView = ({
  containerRef,
  data,
  hasNextPage,
  isFetching
}: IssueListViewProps) => {
  return (
    <div
      ref={containerRef}
      className="relative overflow-y-auto overflow-x-hidden border rounded-xl divide-y mt-5"
    >
      {data?.pages?.map((page, index) => (
        <Fragment key={index}>
          {!Array.isArray(page?.data)
            ? null
            : page?.data?.map((issue) => (
                <IssueRow issue={issue} key={issue.id} />
              ))}
        </Fragment>
      ))}
      {(isFetching || hasNextPage) && (
        <div className="p-4 w-full">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default IssueListView;
