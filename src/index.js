import './styles.css';
import listRepModule from '@js/listRepLoader';
import makeRepsListModule from '@js/makeRepsList';
import searchModule from '@js/searchInput';

searchModule();

if (localStorage.getItem('searchName')) {
    searchInput.placeholder = localStorage.getItem('searchName');
    let requestUrl = 'https://api.github.com/search/repositories?q=' + localStorage.getItem('searchName') + '&sort=stars&page=1&per_page=3'
//заменить количество репов на 10 ^
    makeRepsListModule(requestUrl, 2000)
    .then(dataList => {
        listRepModule(dataList.listItems)
    }).catch(err => console.log(err));
} else {
    let mostPopRepsURL = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1&per_page=1';
//заменить количество репов на 10 ^
    makeRepsListModule(mostPopRepsURL, 2000)
    .then(dataList => {
        listRepModule(dataList.listItems)
    }).catch(err => console.log(err));
}

import paginatorModule from '@js/paginatorLoader';
paginatorModule();

