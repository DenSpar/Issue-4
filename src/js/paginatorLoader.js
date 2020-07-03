let paginatorContainer = listRepContainer.querySelector('.listRepContainer__paginator');
let paginatorPageTemplateContent = paginatorContainer.querySelector('template').content;
let paginatorPageTemplate = paginatorPageTemplateContent.querySelector('.paginatorPage');

let oldPaginatorList = paginatorContainer.querySelector('listRepContainer__paginator_list');
if (oldPaginatorList) {
    oldPaginatorList.remove();
}

let paginatorList = document.createElement('ul');
paginatorList.classList.add('listRepContainer__paginator_list', 'flex', 'justify-content_center');

let makePages = function (num) {
    let newPage = paginatorPageTemplate.cloneNode(true);
    let newNum = newPage.querySelector('a');
    newNum.textContent = num;
    if (num === 1) {
        newPage.classList.add('activePage');
    };
    paginatorList.append(newPage);
};

let makePaginatorModule = function(num) {
    paginatorList.innerHTML = '';
    let howManyPages = 0;
    //проверка если найденых репов больше 10, создаст блок пагинатора - заменить на функцию и импорт
    if (num > 10 && num <= 100) {
        howManyPages = Math.ceil(num/10);        
    };
    if (num > 100) {
        howManyPages = 10;
    };

    for (let j = 1; j <= howManyPages; j++) {
        makePages(j);
    };
    //загрузить блок пагинатора на страницу
    listRepContainer.append(paginatorList);
};

export default makePaginatorModule;