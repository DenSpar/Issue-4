let searchModule = function() {
    let searchInput = document.querySelector('#searchInput');

    //создаем событие для ввода запроса
    searchInput.addEventListener ('keydown', function (evt) {
        if (evt.keyCode === 13) {
            if (searchInput.value === '') {
                searchInput.placeholder = 'пустой запрос :(';
            } else {  
                requestURL = 'https://api.github.com/search/repositories?q=' + searchInput.value + '&sort=stars&page=1&per_page=10';
                console.log(requestURL);
                sendRequest('GET', requestURL)
                .then(data => console.log(data))
                .catch(err => console.log(err));
            };
        };
    });
};

export default searchModule;
