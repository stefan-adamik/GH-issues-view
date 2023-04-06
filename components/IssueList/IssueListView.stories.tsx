import type { Meta, StoryObj } from '@storybook/react';
import { mockIssue } from 'my-app/mocks/issue';
import { createRef } from 'react';
import IssueListView from './IssueListView';

const meta: Meta<typeof IssueListView> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'IssueListView',
  component: IssueListView
};

export default meta;
type Story = StoryObj<typeof IssueListView>;
const mockIssues = Array(5)
  .fill(0)
  .map((_, index) => ({
    ...mockIssue,
    id: mockIssue.id + index
  }));

const mockData = {
  pageParams: [],
  pages: [
    {
      data: mockIssues,
      page: 1,
      perPage: 20,
      hasNextPage: true
    }
  ]
};

export const Default: Story = {
  render: () => {
    const ref = createRef<HTMLDivElement>();
    return (
      <IssueListView
        data={mockData}
        hasNextPage={false}
        isFetching={false}
        containerRef={ref}
      />
    );
  }
};

export const HasNextPage: Story = {
  render: () => {
    const ref = createRef<HTMLDivElement>();
    return (
      <IssueListView
        data={mockData}
        hasNextPage={true}
        isFetching={false}
        containerRef={ref}
      />
    );
  }
};

export const IsFetching: Story = {
  render: () => {
    const ref = createRef<HTMLDivElement>();
    return (
      <IssueListView
        data={mockData}
        hasNextPage={false}
        isFetching={true}
        containerRef={ref}
      />
    );
  }
};
