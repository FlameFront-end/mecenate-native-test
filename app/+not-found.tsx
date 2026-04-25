import { router } from 'expo-router';

import { FeedScreenFrame } from '@/features/feed/ui/components/FeedScreenFrame';
import { NothingFoundState } from '@/shared/ui/NothingFoundState';

export default function NotFoundScreen() {
  return (
    <FeedScreenFrame>
      <NothingFoundState onHomePress={() => router.replace('/' as never)} />
    </FeedScreenFrame>
  );
}
