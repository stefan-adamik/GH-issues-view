import { SortDirection } from 'my-app/constants/common';

export enum IssueState {
  OPEN = 'open',
  CLOSED = 'closed'
}

export enum IssueSortType {
  CREATED = 'created',
  UPDATED = 'updated',
  COMMENTS = 'comments'
}

export enum IssueSortOptions {
  Newest = 'newest',
  Oldest = 'oldest',
  MostCommented = 'most-commented',
  LeastCommented = 'least-commented',
  RecentlyUpdated = 'recently-updated',
  LeastRecentlyUpdated = 'least-recently-updated'
}

export const IssueSortOptionsMap = {
  [IssueSortOptions.Newest]: {
    key: IssueSortOptions.Newest,
    label: 'Newest',
    value: {
      sort: IssueSortType.CREATED,
      sortDir: SortDirection.DESC
    }
  },
  [IssueSortOptions.Oldest]: {
    key: IssueSortOptions.Oldest,
    label: 'Oldest',
    value: {
      sort: IssueSortType.CREATED,
      sortDir: SortDirection.ASC
    }
  },
  [IssueSortOptions.MostCommented]: {
    key: IssueSortOptions.MostCommented,
    label: 'Most commented',
    value: {
      sort: IssueSortType.COMMENTS,
      sortDir: SortDirection.DESC
    }
  },
  [IssueSortOptions.LeastCommented]: {
    key: IssueSortOptions.LeastCommented,
    label: 'Least commented',
    value: {
      sort: IssueSortType.COMMENTS,
      sortDir: SortDirection.ASC
    }
  },
  [IssueSortOptions.RecentlyUpdated]: {
    key: IssueSortOptions.RecentlyUpdated,
    label: 'Recently updated',
    value: {
      sort: IssueSortType.UPDATED,
      sortDir: SortDirection.DESC
    }
  },
  [IssueSortOptions.LeastRecentlyUpdated]: {
    key: IssueSortOptions.LeastRecentlyUpdated,
    label: 'Least recently updated',
    value: {
      sort: IssueSortType.UPDATED,
      sortDir: SortDirection.ASC
    }
  }
};

export const IssueSortOptionsArray = Object.values(IssueSortOptionsMap);
