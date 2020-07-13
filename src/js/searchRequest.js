import listRepPainterModule from '@js/listRepPainter';
import makeRepsListModule from '@js/makeRepsList';
import paintPaginatorModule from '@js/paginatorPainter';
import writeTitleModule from '@js/contentTitle';

let searchRequestModule = function(searchName, searchPage, isMostPop) { 
    let requestURL = 'https://api.github.com/search/repositories?q=' + searchName + '&sort=stars&order=desc&page=' + searchPage + '&per_page=2';   
    //заменить количество репов на 10 ^
    makeRepsListModule(requestURL, 2000)
    .then(dataList => {
        if (dataList.totalCount === 0) {
            writeTitleModule('Репозитории по запросу "' + searchName + '" не найдены')
        } else {
            listRepPainterModule(dataList.listItems);        
            if (!isMostPop && dataList.totalCount > 10){
                paintPaginatorModule(dataList.totalCount);
            }; 
        };               
    }, () => {
        writeTitleModule('что-то пошло не так :(<br>Попробуйте перезагрузить страницу');
    })
    .catch(err => console.log(err));
};

export default searchRequestModule;