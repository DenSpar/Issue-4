let searchInput = document.querySelector('#searchInput');

let inputListenerModule = function() {
    searchInput.addEventListener ('keydown', function (evt) {
        if (evt.keyCode === 13) {
            if (searchInput.value === '') {
                searchInput.placeholder = 'репозиторий не указан :(';
            } else {
                let newURL = new URL (window.location.href);
                if (newURL.searchParams.has('repName')) {
                    newURL.searchParams.delete('repName');
                };
                newURL.searchParams.set('search', searchInput.value);
                newURL.searchParams.set('page', 1);                
                window.location.href = newURL;
            };
        };
    });
};

export default inputListenerModule;