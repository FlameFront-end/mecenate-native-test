import { StyleSheet, View } from 'react-native';

import { tokens } from '@/shared/config/tokens';

export function FeedSkeleton() {
  return (
    <View style={styles.skeletonCard}>
      <View style={styles.skeletonAuthor}>
        <View style={styles.skeletonAvatar} />
        <View style={styles.skeletonName} />
      </View>
      <View style={styles.skeletonImage} />
      <View style={styles.skeletonBody}>
        <View style={styles.skeletonTitle} />
        <View style={styles.skeletonLine} />
        <View style={styles.skeletonStats} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  skeletonCard: {
    backgroundColor: tokens.color.surface,
    borderBottomWidth: 1,
    borderBottomColor: tokens.color.border,
  },
  skeletonAuthor: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: tokens.spacing.lg,
  },
  skeletonAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: tokens.color.skeleton,
  },
  skeletonName: {
    width: 106,
    height: 14,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.color.skeleton,
  },
  skeletonImage: {
    height: 274,
    backgroundColor: tokens.color.skeleton,
  },
  skeletonBody: {
    padding: tokens.spacing.lg,
    gap: 10,
  },
  skeletonTitle: {
    width: 152,
    height: 18,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.color.skeleton,
  },
  skeletonLine: {
    width: '82%',
    height: 14,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.color.skeleton,
  },
  skeletonStats: {
    width: 118,
    height: 28,
    borderRadius: 14,
    backgroundColor: tokens.color.skeleton,
  },
});
