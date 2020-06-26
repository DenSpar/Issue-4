import './styles.css';
import listRepModule from '@js/listRepLoader';
import makeItemsListModule from '@js/makeItemsList';

let mostPopRepsURL = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1&per_page=10';

makeItemsListModule(mostPopRepsURL)
.then(data => {
    console.log('items: ', data.listItems);
    console.log('totalCount: ', data.totalCount);
    listRepModule(data.listItems)
})


/*
//тестовые запросы к коммитам
import getRequestModule from '@js/getRequest';
let testRequest = 'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits?per_page=1';
getRequestModule(testRequest)
.then(data => console.log(data))
.catch(err => console.log(err));
let testRequest2 = 'https://api.github.com/repos/996icu/996.ICU/commits?per_page=1';
getRequestModule(testRequest2)
.then(data => console.log(data))
.catch(err => console.log(err));
*/


import paginatorModule from '@js/paginatorLoader';
paginatorModule();
import searchModule from '@js/searchInput';
searchModule();