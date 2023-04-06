import type { Meta, StoryObj } from '@storybook/react';
import { mockIssue } from 'my-app/mocks/issue';
import IssueRow from '.';

const meta: Meta<typeof IssueRow> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'IssueRow',
  component: IssueRow
};

export default meta;
type Story = StoryObj<typeof IssueRow>;

export const Default: Story = {
  render: () => {
    return (
      <div className="border rounded-lg">
        <IssueRow issue={mockIssue} />
      </div>
    );
  }
};
