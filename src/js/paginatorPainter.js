import changePageModule from '@js/changePage';

let paginatorContainer = listRepContainer.querySelector('.listRepContainer__paginator');
let paginatorPageTemplateContent = paginatorContainer.querySelector('template').content;
let paginatorPageTemplate = paginatorPageTemplateContent.querySelector('.paginatorPage');

let oldPaginatorList = paginatorContainer.querySelector('listRepContainer__paginator_list');
if (oldPaginatorList) {
    oldPaginatorList.remove();
}

let paginatorList = document.createElement('ul');
paginatorList.classList.add('listRepContainer__paginator_list', 'flex', 'justify-content_center');

let makePage = function (num) {
    let newPage = paginatorPageTemplate.cloneNode(true);
    let newNum = newPage.querySelector('div');
    newNum.textContent = num;
    let activePage = 1;
    if (localStorage.getItem('page')) {
        activePage = +localStorage.getItem('page');
    }
    if (num === activePage) {
        newPage.classList.add('activePage');
    };
    paginatorList.append(newPage);
};

let paintPaginatorModule = function(num) {
    paginatorList.innerHTML = '';
    let howManyPages = 0;
    //проверка если найденых репов больше 10, но меньше 100, создаст блок пагинатора до 10 страниц
    if (num > 10 && num <= 100) {
        howManyPages = Math.ceil(num/10);        
    };
    //если найденых репов больше 100, создаст блок пагинатора на 10 страниц
    if (num > 100) {
        howManyPages = 10;
    };

    for (let j = 1; j <= howManyPages; j++) {
        makePage(j);
    };
    //загрузить блок пагинатора на страницу
    paginatorContainer.append(paginatorList);
    console.log('paginator already painted');
    changePageModule();
};

export default paintPaginatorModule;