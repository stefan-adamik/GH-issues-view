export type PaginationQueryOptions = {
  page: number;
  perPage: number;
  sort: string;
  direction: string;
};

export type PaginationResults<T> = {
  data: T[];
  page: number;
  perPage: number;
  hasNextPage: boolean;
};
