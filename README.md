# Issue-4

16.06.20
init project

17.06.20
1. доделал верстку, добавил стили. Теперь видно как будет выглядеть приложение
2. сделал js для загрузки репозиториев на страницу, пока из тестового массива
3. сделал js для создания пагинатора, пока тоже из тестового массива

18.06.20
1. сделал API поиск по гиту по названию. Пока результат поиска получаю в консоль, в следующей задаче сделаю переработку массива в карточки. Заодно настроил запрос API-пагинатора, чтобы в ответе на странице было 10 репозиториев. Страница пока только 1. В одной из следующих задач доделаю, чтобы страницы динамически менялись
2. сделал API поиск по гиту по популярности, за популярность принимаю количество звезд. Пока результат поиска получаю в консоль, в следующей задаче сделаю переработку массива в карточки

19.06.20
1. долго искал где лежит информация о последнем коммите, нашел. Теперь все что нужно для списка репозиториев выводится в консоль. Прежде чем передавать полученные данные на страницу подключу webpack

22.06.20
1. начал настраивать webpack. Настроил загрузку страницы из шаблона html, подгрузил все js через index.js
2. установил webpack-dev-server, пока не работает. Отложил, сначала настрою импорт CSS