import { Image as ExpoImage } from 'expo-image';

export function prefetchImages(urls: string[]) {
  urls
    .filter(Boolean)
    .forEach((url) => {
      ExpoImage.prefetch(url, 'memory-disk').catch(() => undefined);
    });
}
