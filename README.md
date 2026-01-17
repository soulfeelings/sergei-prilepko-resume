# Sergei Prilepko - Resume

Резюме на React + TypeScript + Vite

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Деплой на GitHub Pages

### Автоматический деплой через GitHub Actions

1. В настройках репозитория GitHub (`Settings` → `Pages`):
   - В разделе `Source` выбери `GitHub Actions`
   - Сохрани изменения

2. После пуша в ветку `main` автоматически запустится workflow, который:
   - Соберет проект
   - Задеплоит на GitHub Pages

3. Страница будет доступна по адресу:
   `https://<username>.github.io/sergei-prilepko-resume/`

### Ручной деплой

1. Собери проект: `pnpm run build`
2. В настройках репозитория GitHub включи GitHub Pages
3. Выбери папку `dist` как источник
