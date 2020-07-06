import listRepModule from '@js/listRepLoader';
import makeRepsListModule from '@js/makeRepsList';
import makePaginatorModule from '@js/paginatorLoader';

let searchModule = function(searchName, searchPage) { 
    let requestURL = 'https://api.github.com/search/repositories?q=' + searchName + '&sort=stars&order=desc&page=' + searchPage + '&per_page=2';   
    //заменить количество репов на 10 ^
    makeRepsListModule(requestURL, 2000)
    .then(dataList => {
        listRepModule(dataList.listItems);
        console.log(dataList.totalCount);
        makePaginatorModule(dataList.totalCount);
    }).catch(err => console.log(err));
};

export default searchModule;
