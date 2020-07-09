//import searchRequestModule from '@js/searchRequest';
let searchInput = document.querySelector('#searchInput');

let createUrlForList = function (search, page) {
    
};

let inputListenerModule = function() {
    searchInput.addEventListener ('keydown', function (evt) {
        if (evt.keyCode === 13) {
            if (searchInput.value === '') {
                searchInput.placeholder = 'репозиторий не указан :(';
            } else {
                let newURL = new URL (window.location.href);
                newURL.searchParams.set('search', searchInput.value);
                newURL.searchParams.set('page', 1);                
                window.location.href = newURL;
            };
        };
    });
};


export default inputListenerModule;