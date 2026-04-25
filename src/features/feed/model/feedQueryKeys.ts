export const feedQueryKeys = {
  all: ['feed'] as const,
  posts: () => [...feedQueryKeys.all, 'posts'] as const,
};
