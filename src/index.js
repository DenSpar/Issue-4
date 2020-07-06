import './styles.css';
import searchModule from '@js/searchInput';
import inputListenerModule from '@js/inputListener';

inputListenerModule();

if (localStorage.getItem('searchName')) {
    searchInput.value = localStorage.getItem('searchName');
    searchModule(localStorage.getItem('searchName'), localStorage.getItem('page'));
} else {
    searchModule('stars%3A%3E0', 1, true);
};