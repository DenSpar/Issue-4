import searchModule from '@js/searchInput';
let searchInput = document.querySelector('#searchInput');

let inputListenerModule = function() {
    searchInput.addEventListener ('keydown', function (evt) {
        if (evt.keyCode === 13) {
            if (searchInput.value === '') {
                searchInput.placeholder = 'репозиторий не указан :(';
            } else {
                localStorage.setItem('searchName', searchInput.value.toString());
                localStorage.setItem('page', '1');
                searchModule(searchInput.value, 1)
            };
        };
    });
};


export default inputListenerModule;