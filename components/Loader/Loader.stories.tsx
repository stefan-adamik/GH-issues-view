import type { Meta, StoryObj } from '@storybook/react';
import Loader from '.';

const meta: Meta<typeof Loader> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Loader',
  component: Loader
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => {
    return (
      <div className="border rounded-lg">
        <Loader />
      </div>
    );
  }
};
