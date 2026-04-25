import { useEffect, useRef } from 'react';

import type { Post } from '@/shared/api/types';
import { prefetchImages } from '@/shared/lib/prefetchImages';

export function usePrefetchFeedImages(posts: Post[]) {
  const prefetchedUrls = useRef(new Set<string>());

  useEffect(() => {
    const nextUrls = posts
      .flatMap((post) => [post.coverUrl, post.author.avatarUrl])
      .filter((url) => url && !prefetchedUrls.current.has(url));

    nextUrls.forEach((url) => prefetchedUrls.current.add(url));
    prefetchImages(nextUrls);
  }, [posts]);
}
