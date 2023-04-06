// short-list of properties
import { IssueState } from 'my-app/constants/issue';

export type Issue = {
  id: number;
  url: string;
  html_url: string;
  number: number;
  title: string;
  state: IssueState;
  comments: number;
  created_at: string;
  updated_at: string;
};
