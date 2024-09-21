## Запуск проекта
```
npm install - устанавливаем зависимости
npm run dev - запуск сервера + frontend проекта в dev режиме
```
Конфингурация для React проектов собрана в этом репозитории. Пример применения и работоспособности конфигурации представлена в виде небольшого приложения (Todo/Photos).
Проект развернуть на [GitHub Pages](https://munchedbox23.github.io/react-ts-web-starter/))

## Скрипты

- `npm run dev` - Запуск frontend проекта на webpack dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме
- `npm run test:unit` - Запуск unit тестов c помощью Jest
- `npm run test:e2e` - Запуск e2e тестов с помощью Cypress
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка Storybook 
- `npm run deploy` - Сборка и деплой билда на gh-pages

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Тесты

В проекте используются 3 вида тестов:
1) Модульное тестирование на jest - `npm run test:unit`
2) Тестирование компонентов с React-testing-library -`npm run test:unit`
4) E2E тестирование на Cypress `npm run test:e2e`

----

## Storybook

В проекте для компонентов описываются стори-кейсы.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run sb`

Подробнее о [Storybook](/docs/storybook.md)

----

## Конфигурация проекта

Для разработки и тестирования проекта содержится webpack и jest конфиги:
- Webpack - ./config/build
- Jest - ./config/jest

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация storybook


Для стилей описаны переменные, которые заданы в ./app/styles/variables

----

## Сущности (entities)

- [Todo](/src/entities/todo)
- [Photos](/src/entities/photos)

Сущности используются для хранения данных в Redux (slice), запросов (services) и ui компонентов.

## Фичи (features)

- [AddTodoItem](/src/features/AddTodoItem)
- [EditTodoItem](/src/features/EditTodoItem)

Фичи определяют основные бизнес-процессы в приложении.
