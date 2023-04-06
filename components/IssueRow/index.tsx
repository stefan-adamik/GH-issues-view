import { IssueState } from 'my-app/constants/issue';
import { Issue } from 'my-app/types/issue';
import Image from 'next/image';

type IssueRowProps = {
  issue: Issue;
};
const IssueRow = ({ issue }: IssueRowProps) => {
  return (
    <div className="px-4 py-2 flex items-start hover:bg-light-blue-50 gap-4">
      <div
        className={`w-4 h-4 rounded-full shrink-0 flex items-center justify-center mt-1 ${
          issue.state === IssueState.OPEN ? 'bg-open' : 'bg-closed'
        }`}
      >
        <div className={`w-3 h-3 rounded-full bg-white`}></div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <a
          className="text-black hover:underline font-bold"
          href={issue.html_url}
          target="_blank"
        >
          {issue.title}
        </a>
        <i className="text-sm opacity-70">#{issue.number}</i>
      </div>
      <div className="w-10 shrink-0 ml-auto">
        {issue.comments > 0 ? (
          <div className="flex items-center gap-2">
            <Image
              width={20}
              height={20}
              src="/icons/comment.svg"
              className="w-4 h-4"
              alt="Comment-icon"
            />
            {issue.comments}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default IssueRow;
