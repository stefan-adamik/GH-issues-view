import { UseInfiniteQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

const useInfiniteQueryOptions = <T>(
  options?: UseInfiniteQueryOptions<T>
): UseInfiniteQueryOptions<T> => {
  return {
    staleTime: 15000,
    cacheTime: 15000,
    ...options,
    retry: false,
    refetchOnWindowFocus: false,
    onError: (error) => {
      toast((error as Error).message);
    }
  };
};

export default useInfiniteQueryOptions;
