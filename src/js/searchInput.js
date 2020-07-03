import listRepModule from '@js/listRepLoader';
import makeRepsListModule from '@js/makeRepsList';
import makePaginatorModule from '@js/paginatorLoader';
let searchInput = document.querySelector('#searchInput');

let searchModule = function() {    
    //создаем событие для ввода запроса
    searchInput.addEventListener ('keydown', function (evt) {
        if (evt.keyCode === 13) {
            if (searchInput.value === '') {
                searchInput.placeholder = 'репозиторий не указан :(';
            } else {                
                let requestURL = 'https://api.github.com/search/repositories?q=' + searchInput.value + '&sort=stars&page=1&per_page=1';
                //заменить количество репов на 10 ^
                localStorage.setItem('searchName', searchInput.value.toString());
                makeRepsListModule(requestURL, 2000)
                .then(dataList => {
                    listRepModule(dataList.listItems);
                    console.log(dataList.totalCount);
                    makePaginatorModule(dataList.totalCount);
                }).catch(err => console.log(err));
            };
        };
    });
};

export default searchModule;
