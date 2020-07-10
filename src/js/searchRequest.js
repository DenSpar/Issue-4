import listRepPainterModule from '@js/listRepPainter';
import makeRepsListModule from '@js/makeRepsList';
import paintPaginatorModule from '@js/paginatorPainter';

let searchRequestModule = function(searchName, searchPage, isMostPop) { 
    let requestURL = 'https://api.github.com/search/repositories?q=' + searchName + '&sort=stars&order=desc&page=' + searchPage + '&per_page=3';   
    //заменить количество репов на 10 ^
    makeRepsListModule(requestURL, 2000)
    .then(dataList => {
        listRepPainterModule(dataList.listItems);
        console.log(dataList.totalCount);
        if (!isMostPop){
            paintPaginatorModule(dataList.totalCount);
        };        
    }).catch(err => console.log(err));
};

export default searchRequestModule;
