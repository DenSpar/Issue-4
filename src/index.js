import './styles.css';
import listRepModule from '@js/listRepLoader';
import makeItemsListModule from '@js/makeItemsList';

let mostPopRepsURL = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1&per_page=10';


Promise.race([
    makeItemsListModule(mostPopRepsURL),
    new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, репозитории не полученны'), 2000))
]).then(dataList => {
    //console.log(dataList);
    listRepModule(dataList.listItems)
}).catch(err => console.log(err));


import paginatorModule from '@js/paginatorLoader';
paginatorModule();
import searchModule from '@js/searchInput';
searchModule();