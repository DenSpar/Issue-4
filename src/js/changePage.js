import searchRequestModule from '@js/searchRequest';

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
            // условие, срабатывает только если нажать на неактивную страницу
            if (nowActivePage.childNodes[1].innerHTML !== page.childNodes[1].innerHTML) {
                nowActivePage.classList.remove('activePage');
                console.log('active page was №', nowActivePage.childNodes[1].innerHTML, 'new active page №', page.childNodes[1].innerHTML);
                page.classList.add('activePage');
                nowActivePage = page;
                localStorage.setItem('page', page.childNodes[1].innerHTML.toString());
                searchRequestModule(localStorage.getItem('searchName'), page.childNodes[1].innerHTML.toString());
            };
        });
    };

    for (let i = 0; i < allPages.length; i++) {
        addEventListenerHandler(allPages[i]);
    };
}