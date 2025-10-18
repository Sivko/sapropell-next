# Интернационализация (i18n) - Sapropell Next.js

## Обзор

Проект настроен для поддержки двух языков:
- **Русский (ru)** - язык по умолчанию
- **Китайский (zh)** - дополнительный язык

## Структура

```
├── messages/
│   ├── ru.json          # Русские переводы
│   └── zh.json          # Китайские переводы
├── app/
│   ├── [locale]/        # Динамический роутинг для языков
│   │   ├── layout.tsx   # Layout с поддержкой i18n
│   │   └── page.tsx     # Главная страница
│   └── layout.tsx       # Корневой layout
├── components/
│   └── language-switcher/ # Переключатель языков
├── middleware.ts         # Middleware для обработки языковых префиксов
├── i18n.ts              # Конфигурация next-intl
└── next.config.ts       # Конфигурация Next.js с next-intl
```

## URL структура

- `/` - автоматически перенаправляет на `/ru`
- `/ru` - русская версия сайта
- `/zh` - китайская версия сайта
- `/ru/about` - русская версия страницы about
- `/zh/about` - китайская версия страницы about

## Использование переводов в компонентах

### Клиентские компоненты

```tsx
"use client";
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('sectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Серверные компоненты

```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyComponent() {
  const t = await getTranslations('sectionName');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

## Добавление новых переводов

1. Откройте файл `messages/ru.json`
2. Добавьте новый ключ в соответствующую секцию:

```json
{
  "header": {
    "logo": "Волга",
    "home": "Главная",
    "contact": "Связаться",
    "newKey": "Новый текст"
  }
}
```

3. Добавьте перевод в `messages/zh.json`:

```json
{
  "header": {
    "logo": "伏尔加",
    "home": "首页",
    "contact": "联系我们",
    "newKey": "新文本"
  }
}
```

## Переключатель языков

Компонент `LanguageSwitcher` автоматически:
- Определяет текущий язык
- Переключает между языками с сохранением текущей страницы
- Отображает флаги и названия языков

## Навигация с языковыми префиксами

Используйте `useLocale()` для создания ссылок с языковыми префиксами:

```tsx
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function Navigation() {
  const locale = useLocale();
  
  return (
    <Link href={`/${locale}/about`}>
      О нас
    </Link>
  );
}
```

## Добавление нового языка

1. Добавьте код языка в `i18n.ts`:

```typescript
const locales = ['ru', 'zh', 'en']; // Добавить 'en'
```

2. Обновите `middleware.ts`:

```typescript
locales: ['ru', 'zh', 'en'],
matcher: ['/', '/(zh|ru|en)/:path*']
```

3. Создайте файл переводов `messages/en.json`
4. Добавьте язык в `LanguageSwitcher` компонент

## Запуск проекта

```bash
npm run dev
```

Проект будет доступен по адресам:
- http://localhost:3000 (автоматически перенаправляет на /ru)
- http://localhost:3000/ru
- http://localhost:3000/zh
