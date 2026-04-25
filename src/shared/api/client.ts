import axios from 'axios';

import { env } from '@/shared/config/env';

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 12_000,
  headers: {
    Authorization: `Bearer ${env.userId}`,
  },
});
