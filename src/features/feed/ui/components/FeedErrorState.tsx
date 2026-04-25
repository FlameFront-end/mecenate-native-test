import { Pressable, StyleSheet, Text, View } from 'react-native';

import { tokens } from '@/shared/config/tokens';

type FeedErrorStateProps = {
  onRetry: () => void;
};

export function FeedErrorState({ onRetry }: FeedErrorStateProps) {
  return (
    <View style={styles.errorState}>
      <Text style={styles.errorTitle}>Не удалось загрузить публикации</Text>
      <Pressable style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryText}>Повторить</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  errorState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing.xl,
    backgroundColor: tokens.color.background,
  },
  errorTitle: {
    color: tokens.color.text,
    fontSize: tokens.typography.title,
    fontWeight: '700',
    textAlign: 'center',
  },
  retryButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: tokens.spacing.lg,
    paddingHorizontal: tokens.spacing.xl,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.color.accent,
  },
  retryText: {
    color: '#ffffff',
    fontSize: tokens.typography.body,
    fontWeight: '700',
  },
});
