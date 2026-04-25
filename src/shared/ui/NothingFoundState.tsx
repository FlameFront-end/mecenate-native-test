import { Pressable, StyleSheet, Text, View } from 'react-native';

import { tokens } from '@/shared/config/tokens';

import { NothingFoundIllustration } from './NothingFoundIllustration';

type NothingFoundStateProps = {
  onHomePress: () => void;
};

export function NothingFoundState({ onHomePress }: NothingFoundStateProps) {
  return (
    <View style={styles.container}>
      <NothingFoundIllustration />
      <Text style={styles.title}>По вашему запросу ничего не найдено</Text>
      <Pressable style={styles.button} onPress={onHomePress}>
        <Text style={styles.buttonText}>На главную</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: tokens.color.surface,
  },
  title: {
    width: '100%',
    marginTop: 18,
    color: '#1d1d25',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23,
    textAlign: 'left',
  },
  button: {
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
    borderRadius: 10,
    backgroundColor: tokens.color.accent,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});
