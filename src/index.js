import './styles/styles.css';
import searchRequestModule from '@js/searchRequest';
import inputListenerModule from '@js/inputListener';
import showPageModule from '@js/showPageModule';

inputListenerModule();

let nowURL = new URL (window.location.href);
if (nowURL.searchParams.has('search')) {
    searchInput.value = nowURL.searchParams.get('search');
    searchRequestModule(nowURL.searchParams.get('search'), nowURL.searchParams.get('page'));
} else {
    if (nowURL.searchParams.has('repName')) {
        showPageModule();
    } else {
        searchRequestModule('stars%3A%3E0', 1, true);
    };    
};