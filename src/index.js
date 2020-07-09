import './styles/styles.css';
import searchRequestModule from '@js/searchRequest';
import inputListenerModule from '@js/inputListener';

inputListenerModule();

if (localStorage.getItem('searchName')) {
    searchInput.value = localStorage.getItem('searchName');
    searchRequestModule(localStorage.getItem('searchName'), localStorage.getItem('page'));
} else {
    searchRequestModule('stars%3A%3E0', 1, true);
};

//let urlTest = 
console.log(window.location);