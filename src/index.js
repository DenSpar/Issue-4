import './styles.css';
import listRepModule from './js/listRepLoader';
//тестовый массив - удалить
let repTestArr = [
    {name: 'jakesgordon/javascript-tetris', numStars: '354', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'LoveDaisy/tetris_game', numStars: '1111', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: '3listRepContainer', numStars: '9999', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: '4TemplateContent', numStars: '78', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: '5repStarsNum fontDefault', numStars: '5.1', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: '6Name', numStars: '354', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: '7document.cr', numStars: '1111', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: '8rep StarsNum', numStars: '9999', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: '9fontDefault', numStars: '78', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: '10numStars', numStars: '5.1', lastCommit: '5 Feb', repLink: 'http://github.com'},
];
//тестовый массив - удалить
let repTestArr2 = [
    {name: 'test', numStars: '354', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '1111', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '9999', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '78', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '5.1', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '354', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '1111', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '9999', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '78', lastCommit: '5 Feb', repLink: 'http://github.com'},
    {name: 'test', numStars: '5.1', lastCommit: '5 Feb', repLink: 'http://github.com'},
];
listRepModule(repTestArr);
import getMostPopRepsModule from './js/mostPopReps';
getMostPopRepsModule();
import paginatorModule from './js/paginatorLoader';
paginatorModule();
import searchModule from './js/searchInput';
searchModule();