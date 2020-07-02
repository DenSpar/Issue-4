import listRepModule from '@js/listRepLoader';
import makeRepsListModule from '@js/makeRepsList';
let searchInput = document.querySelector('#searchInput');

let searchModule = function() {    
    //создаем событие для ввода запроса
    searchInput.addEventListener ('keydown', function (evt) {
        if (evt.keyCode === 13) {
            if (searchInput.value === '') {
                searchInput.placeholder = 'репозиторий не указан :(';
            } else {  
                let requestURL = 'https://api.github.com/search/repositories?q=' + searchInput.value + '&sort=stars&page=1&per_page=5';
                //заменить количество репов на 10
                makeRepsListModule(requestURL, 2000)
                .then(dataList => {
                    listRepModule(dataList.listItems)
                }).catch(err => console.log(err));
            };
        };
    });
};

export default searchModule;
