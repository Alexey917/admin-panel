# Задание на frontend с хакатона NEO HACK от Neoflex 

Админ-панель для управления материалами, используемыми AI ботом, который отвечает на вопросы и подсказывает учебные материалы.

## Ключевые особенности и решения

* Отображение загруженных текстов и ссылок.
* Интерфейс для ручного добавления или редактирования информации.
* Реализовать форму загрузки материалов в систему (например, из .pdf).
* Обеспечить адаптивный дизайн панели
* Организовать взаимодействие с backend через REST API.


## Технологический стек

*   **Frontend:** React, TypeScript
*   **Стилизация:** Sass (SCSS)
*   **Управление состоянием:** Redux Toolkit
*   **Работа с формами:** React-hook-form
*   **HTTP-клиент:** Axios
*   **Тестирование:** React Testing Library, Vitest

## Локальный запуск проекта

git clone [(https://github.com/Alexey917/neobank.git)](https://github.com/Alexey917/neobank.git)
cd my-app

### Запуск фронта
npm install && npm run dev

### Запуск бэканда
1. устанавливаем docker desktop
2. скачиваем docker file для запуска backend - [docker-compose.yaml](my-app/Docker-compose.yaml)
3. командой docker-compose up – build запускается основной контейнер.
4. после скачивания и запуска контейнера по адресу - localhost:8080/swagger-ui/index.html откроется swagger, где можно смотреть все доступные API методы.

Если не открывается swagger или backed выдаёт 500 ошибку или проблемы с docker:
    Зайти в docker desktop удалить все containers, после удалить все images
    Перезагрузить docker и заново всё собрать

## Контакты

Вы можете связаться со мной через следующие платформы:

<a href="https://vk.com/id321802975"><img src="https://github.com/Alexey917/Alexey917/blob/main/assets/vk.png" width="32" height="32" /></a>
<a href="https://t.me/Alexey917"><img src="https://github.com/Alexey917/Alexey917/blob/main/assets/tg.png" width="32" height="32" /></a>
