import { memo, useState } from 'react';
import { Image as ExpoImage } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Post } from '@/shared/api/types';
import { tokens } from '@/shared/config/tokens';

import { CommentIcon, HeartIcon } from './icons';

type FeedPostCardProps = {
  post: Post;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function AuthorAvatar({ name, uri }: { name: string; uri: string }) {
  const [failed, setFailed] = useState(false);

  if (!uri || failed) {
    return (
      <View style={styles.avatarFallback}>
        <Text style={styles.avatarFallbackText}>{getInitials(name)}</Text>
      </View>
    );
  }

  return (
    <ExpoImage
      source={{ uri }}
      style={styles.avatar}
      cachePolicy="memory-disk"
      contentFit="cover"
      transition={120}
      onError={() => setFailed(true)}
    />
  );
}

function StatPill({
  value,
  active,
  type,
}: {
  value: number;
  active?: boolean;
  type: 'likes' | 'comments';
}) {
  return (
    <View style={[styles.statPill, active && styles.statPillActive]}>
      {type === 'likes' ? <HeartIcon active={active} /> : <CommentIcon />}
      <Text style={[styles.statText, active && styles.statTextActive]}>{value}</Text>
    </View>
  );
}

function LockedPost({ post }: FeedPostCardProps) {
  return (
    <View style={styles.card}>
      <AuthorRow post={post} />

      <View style={styles.lockedMedia}>
        <ExpoImage
          source={{ uri: post.coverUrl }}
          style={styles.lockedImage}
          cachePolicy="memory-disk"
          contentFit="cover"
          blurRadius={18}
          transition={160}
        />
        <View style={styles.lockedScrim} />
        <View style={styles.lockedContent}>
          <View style={styles.lockBadge}>
            <Text style={styles.lockBadgeText}>$</Text>
          </View>
          <Text style={styles.lockedText}>Контент скрыт пользователем.</Text>
          <Text style={styles.lockedText}>Доступ откроется после доната</Text>
          <Pressable style={styles.donateButton}>
            <Text style={styles.donateText}>Отправить донат</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.skeletonBlock}>
        <View style={styles.skeletonShort} />
        <View style={styles.skeletonLong} />
      </View>
    </View>
  );
}

function AuthorRow({ post }: FeedPostCardProps) {
  return (
    <View style={styles.authorRow}>
      <AuthorAvatar name={post.author.displayName} uri={post.author.avatarUrl} />
      <Text style={styles.authorName}>{post.author.displayName}</Text>
    </View>
  );
}

function FeedPostCardComponent({ post }: FeedPostCardProps) {
  if (post.tier === 'paid') {
    return <LockedPost post={post} />;
  }

  return (
    <View style={styles.card}>
      <AuthorRow post={post} />

      <ExpoImage
        source={{ uri: post.coverUrl }}
        style={styles.postImage}
        cachePolicy="memory-disk"
        contentFit="cover"
        transition={160}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body} numberOfLines={2}>
          {post.preview || post.body}
          <Text style={styles.more}> Показать еще</Text>
        </Text>

        <View style={styles.statsRow}>
          <StatPill value={post.likesCount} active={post.isLiked} type="likes" />
          <StatPill value={post.commentsCount} type="comments" />
        </View>
      </View>
    </View>
  );
}

export const FeedPostCard = memo(FeedPostCardComponent);

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    backgroundColor: tokens.color.surface,
    borderBottomWidth: 1,
    borderBottomColor: tokens.color.border,
  },
  authorRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: tokens.spacing.lg,
    backgroundColor: tokens.color.surface,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e4e9ef',
  },
  avatarFallback: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ece6ff',
  },
  avatarFallbackText: {
    color: tokens.color.accent,
    fontSize: 11,
    fontWeight: '800',
  },
  authorName: {
    color: tokens.color.text,
    fontSize: tokens.typography.body,
    fontWeight: '700',
  },
  postImage: {
    width: '100%',
    height: 274,
    backgroundColor: '#d8dee7',
  },
  content: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: 13,
    paddingBottom: tokens.spacing.md,
  },
  title: {
    color: '#242a31',
    fontSize: tokens.typography.title,
    fontWeight: '700',
    lineHeight: 21,
  },
  body: {
    marginTop: 10,
    color: '#111827',
    fontSize: tokens.typography.body,
    lineHeight: 17,
  },
  more: {
    color: tokens.color.accent,
    fontWeight: '500',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 11,
  },
  statPill: {
    height: 28,
    minWidth: 56,
    paddingHorizontal: 10,
    borderRadius: tokens.radius.pill,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#f1f4f8',
  },
  statPillActive: {
    backgroundColor: tokens.color.liked,
  },
  statText: {
    color: tokens.color.icon,
    fontSize: tokens.typography.caption,
    fontWeight: '700',
    lineHeight: 14,
  },
  statTextActive: {
    color: '#ffffff',
  },
  lockedMedia: {
    height: 234,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18212b',
  },
  lockedImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    transform: [{ scale: 1.08 }],
  },
  lockedScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(14, 20, 30, 0.5)',
  },
  lockedContent: {
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.xl,
  },
  lockBadge: {
    width: 28,
    height: 28,
    borderRadius: tokens.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: tokens.spacing.md,
    backgroundColor: tokens.color.accent,
  },
  lockBadgeText: {
    color: '#ffffff',
    fontSize: tokens.typography.body,
    fontWeight: '800',
    lineHeight: 15,
  },
  lockedText: {
    color: '#ffffff',
    fontSize: tokens.typography.body,
    fontWeight: '600',
    lineHeight: 16,
    textAlign: 'center',
  },
  donateButton: {
    height: 31,
    minWidth: 142,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
    paddingHorizontal: tokens.spacing.xl,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.color.accent,
  },
  donateText: {
    color: '#ffffff',
    fontSize: tokens.typography.caption,
    fontWeight: '700',
  },
  skeletonBlock: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: 13,
    paddingBottom: tokens.spacing.lg,
    backgroundColor: tokens.color.surface,
    gap: 10,
  },
  skeletonShort: {
    width: 100,
    height: 14,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.color.skeleton,
  },
  skeletonLong: {
    width: '100%',
    height: 26,
    borderRadius: 13,
    backgroundColor: tokens.color.skeleton,
  },
});
