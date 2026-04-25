import { observer } from 'mobx-react-lite';
import { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, RefreshControl, StyleSheet, View } from 'react-native';

import type { Post } from '@/shared/api/types';
import { tokens } from '@/shared/config/tokens';
import { NothingFoundState } from '@/shared/ui/NothingFoundState';

import { feedUiStore } from '../model/feedUiStore';
import { usePrefetchFeedImages } from '../model/usePrefetchFeedImages';
import { useFeedPosts } from '../model/useFeedPosts';
import { FeedErrorState } from './components/FeedErrorState';
import { FeedFooter } from './components/FeedFooter';
import { FeedScreenFrame } from './components/FeedScreenFrame';
import { FeedSkeleton } from './components/FeedSkeleton';
import { FeedPostCard } from './FeedPostCard';

export const FeedScreen = observer(function FeedScreen() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useFeedPosts();

  const posts = useMemo(() => data?.pages.flatMap((page) => page.data.posts) ?? [], [data]);
  usePrefetchFeedImages(posts);

  const renderItem = useCallback<ListRenderItem<Post>>(
    ({ item }) => <FeedPostCard post={item} />,
    [],
  );

  const handleRefresh = useCallback(async () => {
    await feedUiStore.runPullRefresh(() => refetch());
  }, [refetch]);

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) {
    return (
      <FeedScreenFrame>
        <View style={styles.feed}>
          <FeedSkeleton />
          <FeedSkeleton />
        </View>
      </FeedScreenFrame>
    );
  }

  if (isError && posts.length === 0) {
    return (
      <FeedScreenFrame>
        <FeedErrorState onRetry={() => refetch()} />
      </FeedScreenFrame>
    );
  }

  return (
    <FeedScreenFrame>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        contentContainerStyle={styles.feed}
        refreshControl={
          <RefreshControl
            refreshing={feedUiStore.isPullRefreshing}
            onRefresh={handleRefresh}
            tintColor={tokens.color.refresh}
            titleColor={tokens.color.refresh}
            colors={[tokens.color.refresh]}
            progressBackgroundColor={tokens.color.refreshTrack}
            progressViewOffset={18}
          />
        }
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.55}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={6}
        windowSize={7}
        ListEmptyComponent={<NothingFoundState onHomePress={() => refetch()} />}
        ListFooterComponent={
          <FeedFooter hasError={Boolean(error && posts.length > 0)} isLoadingMore={isFetchingNextPage} />
        }
      />
    </FeedScreenFrame>
  );
});

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  feed: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    paddingBottom: 18,
    backgroundColor: tokens.color.background,
  },
});
