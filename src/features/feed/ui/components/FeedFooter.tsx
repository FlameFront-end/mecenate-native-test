import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { tokens } from '@/shared/config/tokens';

type FeedFooterProps = {
  hasError: boolean;
  isLoadingMore: boolean;
};

export function FeedFooter({ hasError, isLoadingMore }: FeedFooterProps) {
  return (
    <View style={styles.footer}>
      {isLoadingMore ? <ActivityIndicator color={tokens.color.accent} /> : null}
      {hasError ? <Text style={styles.paginationError}>Не удалось загрузить публикации</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    minHeight: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationError: {
    color: tokens.color.danger,
    fontSize: tokens.typography.caption,
    fontWeight: '600',
  },
});
