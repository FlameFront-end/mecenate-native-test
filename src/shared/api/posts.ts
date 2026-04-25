import { apiClient } from '@/shared/api/client';
import type { ApiErrorResponse, PostsResponse, Tier } from '@/shared/api/types';

type GetPostsParams = {
  cursor?: string;
  limit?: number;
  tier?: Tier;
  simulateError?: boolean;
};

export async function getPosts({
  cursor,
  limit = 10,
  tier,
  simulateError,
}: GetPostsParams = {}) {
  const response = await apiClient.get<PostsResponse | ApiErrorResponse>('/posts', {
    params: {
      limit,
      cursor,
      tier,
      simulate_error: simulateError,
    },
  });

  if (!response.data.ok) {
    throw new Error(response.data.error.message);
  }

  return response.data;
}
