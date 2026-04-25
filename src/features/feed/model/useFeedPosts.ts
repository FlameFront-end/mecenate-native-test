import { useInfiniteQuery } from '@tanstack/react-query';

import { getPosts } from '@/shared/api/posts';

import { feedQueryKeys } from './feedQueryKeys';

const FEED_PAGE_SIZE = 10;

export function useFeedPosts() {
  return useInfiniteQuery({
    queryKey: feedQueryKeys.posts(),
    initialPageParam: undefined as string | undefined,
    queryFn: ({ pageParam }) => getPosts({ cursor: pageParam, limit: FEED_PAGE_SIZE }),
    getNextPageParam: (lastPage) =>
      lastPage.data.hasMore ? lastPage.data.nextCursor ?? undefined : undefined,
  });
}
