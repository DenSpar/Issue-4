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

23.06.20
1. подключил style-loader, css-loader и normalize.css
2. установил file-loader для картинок. Забыл, что он для этого не подходит
3. установил copy-webpack-plugin, подгрузил картинки
4. понял почему не запускался дев-сервер - лишний пробел в команде
5. подключил clean-webpack-plugin
6. добавил очистку HTML-контейнера с репозитриями перед загрузкой новых репозиториев
7. выделил отдельный модуль для API-запросов
8. настроил упрощенные абсолютные пути
9. настроил динамические изменения имен файлов

24.06.20
1. переписал mostPopReps.js, теперь 10 самых популярных репозиториев передаются не в консоль, а загружаются на страницу(для этого также подкорректировал функцию сощдания карточек). Но неправильно задается lastCommit - всем карточкам пишет один и тот же

25.06.20
1. долго пытался сделать отрисовку карточек прямо из полученного json. Пришел к выводу, что это можно сделать двумя способами:
    а) написать 1 функцию, которая получает url запроса, получает ответ, заполняет карточки, отрисовывает весь список на странице - не хочу делать все в 1 функции
    б) делать запросы последовательные запросы для даты последнего коммита async await - получится очень долго
решил сделать массив, который будет принимать нужные мне значения из полученных json, затем из него будет отрисовываться страница
2. реализовал отрисовку самых популярных репов из полученнго json, без последнего коммита. Здесь появилась следующая проблема - превышенно количество запросов к коммитам, git возвращает 403 ошибку
3. почитал документацию, как я понял увеличить лимит можно аутентификацией или авторизацией. Такой функционал не предполагается, попробую пока без увеличения лимита
4. проблема - отрисовка карточек из массива начинается раньше, чем массив успевает заполнится

30.06.20
1. придумал 2 способа как дождаться ответа от повторных запросов про коммиты. Буду пробовать оба

01.07.20
1. первый способ, который придумал: 
    а) объявить счетчик полученных коммитов
    б) к запросу коммита зачейнить увеличение счетчика
    в) написать Promise, который будет с интервалом 50-100мс проверять счетчик. Если счетик равен количеству элементов на странице -> значит все коммиты полученны, можно отрисовывать страницу
    в.2) к функцие проверке добавить setTimeout, который будет прерывать Promise.race через 500мс
   второй способ:
    а) в obj добавить массив для запросов на коммиты
    б) закинуть весь массив в Promise.all
    в) Promise.all положить в await Promise.race
    в.2) также в Promise.race добавить setTimeout, который будет прерывать Promise.race через 500мс
2. на стадии написания 1 способа понял, что в сравнение со вторым способом надо ввести дополнительный счетчик и дополнительный промис, который будет ходить проверять этот счетчик. Забил на 1 способ, буду сразу делать по 2
3. объявил массив с url запросами для получения последних коммитов + переработал их в гет-запросы, теперь этот массив можно добавить в Promise.all
4. вставил массив в Promise.all - ответы о коммитах все равно приходят после отрисовки
5. поправил

02.07.20
1. настроил чтобы отрисовывались карточки после ответа от Promise.all. Теперь думаю перенести Promise.all из index.js в модуль + переложить Promise.all в Promise.race и добавить в Promise.race прерывающий setTimeout. По девтулсу запросы возвращаются чуть меньше чем 1 с
2. перенес Promise.all в модуль
3. обернул Promise.all в Promise.race. Поставить прерывающий setTimeout 700мс,тогда ответ приходит примрно за 250мс. Когда ставлю setTimeout 500мс - ответ не успевает придти, функция прерывается
+ обернул в Promise.race запрос на поиск репозиториев, с прерыванием через 2000мс
4. дописал скрипт поиска, теперь он находит и отрисовывает карточки репозиториев. Во время проверки поиска выпала интересная ошибка - 409, пустой репозиторий. То есть в поиске он выпадает, но коммитов у него нет. Можно переделать Promise.all в Promise.allSettled, обработать ошибку, чтобы вместо даты коммита выводился статус ошибки