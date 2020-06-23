//тестовый массив для пагинатора - заменить на счетчик найденых репов
let makeTestArr = function (num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(i);
    };
    return arr
};
let paginatorModule = function() {
    let paginatorContainer = listRepContainer.querySelector('.listRepContainer__paginator');
    let paginatorPageTemplateContent = paginatorContainer.querySelector('template').content;
    let paginatorPageTemplate = paginatorPageTemplateContent.querySelector('.paginatorPage');

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

    let testArr = makeTestArr(100);
    //проверка если найденых репов больше 10, создаст блок пагинатора - заменить на функцию и импорт
    if (testArr.length > 10) {
        let howManyPages = Math.ceil(testArr.length/10);
        for (let j = 1; j <= howManyPages; j++) {
            makePages(j);
        };
        //загрузить блок пагинатора на страницу
        listRepContainer.append(paginatorList);
    };
};

export default paginatorModule;


