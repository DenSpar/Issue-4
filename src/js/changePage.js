let paginatorContainer = listRepContainer.querySelector('.listRepContainer__paginator');
export default function changePageModule () {
    //обявляем переменную. Внутри переменной будет объект с активной страницей
    let nowActivePage = paginatorContainer.querySelector('.activePage');
    //объявляем переменную. Внутри переменной будут все страницы
    let allPages = paginatorContainer.querySelectorAll ('.paginatorPage');

    //создаем функцию для замыкания нужных нам значений
    let addEventListenerHandler = function (page) {
        //создаем обработчик события - клик на страницу
        page.addEventListener ('click', function () {
            //инструкция к событию
            nowActivePage.classList.remove('activePage');
            console.log('active page was ', nowActivePage);
            page.classList.add('activePage');
            nowActivePage = page;
            console.log('new active page is ',page);
        });
    };

    for (let i = 0; i < allPages.length; i++) {
        addEventListenerHandler(allPages[i]);
    };
}