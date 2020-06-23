import getRequestModule from '@js/getRequest';
let searchModule = function() {    
    let searchInput = document.querySelector('#searchInput');

    //создаем событие для ввода запроса
    searchInput.addEventListener ('keydown', function (evt) {
        if (evt.keyCode === 13) {
            if (searchInput.value === '') {
                searchInput.placeholder = 'репозиторий не указан :(';
            } else {  
                let requestURL = 'https://api.github.com/search/repositories?q=' + searchInput.value + '&sort=stars&page=1&per_page=10';
                console.log(requestURL);
                getRequestModule(requestURL)
                .then(data => console.log(data))
                .catch(err => console.log(err));
            };
        };
    });
};

export default searchModule;
