# Mecenate Feed

Тестовое задание: лента постов для Mecenate на React Native + Expo.

## Что есть

- лента постов с API
- аватар, имя автора, обложка, текст, лайки и комментарии
- курсорная пагинация при скролле вниз
- pull-to-refresh
- закрытые paid-посты с заглушкой
- экран ошибки с текстом `Не удалось загрузить публикации` и кнопкой повтора
- React Query для запросов
- MobX для UI-состояния
- дизайн-токены в `src/shared/config/tokens.ts`

## Запуск

Нужны Node.js `>=22.11.0` и pnpm.

```bash
pnpm install
pnpm start
```

Потом открыть в Expo Go по QR-коду.

Команды:

```bash
pnpm ios
pnpm android
pnpm web
```

На web у API могут быть CORS-нюансы. Основной сценарий проверки — Expo Go на iOS/Android.

## Переменные окружения

Можно ничего не настраивать, дефолты уже есть в коде.

Если нужно поменять API или пользователя:

```bash
cp .env.example .env
```

```env
EXPO_PUBLIC_MECENATE_API_URL=https://k8s.mectest.ru/test-app
EXPO_PUBLIC_MECENATE_USER_ID=550e8400-e29b-41d4-a716-446655440000
```

`EXPO_PUBLIC_MECENATE_USER_ID` — любой валидный UUID, он уходит как Bearer token.

## Проверка

```bash
pnpm typecheck
```
