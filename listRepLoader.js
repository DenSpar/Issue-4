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

let listRepContainer = document.querySelector('#listRepContainer');
let itemTemplateContent = listRepContainer.querySelector('template').content;
let itemTemplate = itemTemplateContent.querySelector('.listRepContainer__listRep_itemContainer');

let listRep = document.createElement('div');
listRep.classList.add('listRepContainer__listRep', 'flex', 'justify-content_space-between', 'flex-wrap');

let makeNewRepCard = function (name, numStars, lastCommit, repLink) {
    let newCard = itemTemplate.cloneNode(true);
    let newName = newCard.querySelector('.repName');
    newName.textContent = name;
    let newStarsNum = newCard.querySelector('.repStarsNum');
    newStarsNum.textContent = numStars;
    let newLastCommit = newCard.querySelector('.lastCommit')
    newLastCommit.textContent += lastCommit;
    let newRepLink = newCard.querySelector('.repLink');
    newRepLink.href = repLink;
    listRep.append(newCard);
};

for (i = 0; i < repTestArr.length; i++) {
    makeNewRepCard(repTestArr[i].name, repTestArr[i].numStars, repTestArr[i].lastCommit, repTestArr[i].repLink);
};

listRepContainer.prepend(listRep);