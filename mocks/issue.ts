import { IssueState } from 'my-app/constants/issue';

export const mockIssue = {
  url: 'https://api.github.com/repos/microsoft/TypeScript/issues/53686',
  html_url: 'https://github.com/microsoft/TypeScript/issues/53686',
  id: 1656749658,
  number: 53686,
  title: 'Weird infer by const modifier in spread arguments',
  state: IssueState.OPEN,
  comments: 0,
  created_at: '2023-04-06T06:31:26Z',
  updated_at: '2023-04-06T06:32:36Z'
};
