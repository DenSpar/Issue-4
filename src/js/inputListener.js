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
                let newPath = newURL.pathname.slice(0, newURL.pathname.length-12) + 'repList.html';
                newURL.searchParams.set('search', searchInput.value);
                newURL.searchParams.set('page', 1);
                newURL.pathname = newPath;
                window.location.href = newURL;
            };
        };
    });
};

export default inputListenerModule;