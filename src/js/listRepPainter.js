import changePathModule from '@js/changePath';

let contentContainer = document.querySelector('#contentContainer');
let itemTemplateContent = contentContainer.querySelector('#repItemTemplate').content;
let itemTemplate = itemTemplateContent.querySelector('.contentContainer__listRep_itemContainer');

let listRep = document.createElement('div');
listRep.classList.add('contentContainer__listRep', 'flex', 'flex-direction_column');

let repPageURL = function (itemName) {
    let repURL = new URL(window.location.href);
    repURL.searchParams.delete('search');
    repURL.searchParams.delete('page');
    repURL.searchParams.set('repName', itemName);    
    repURL.pathname = changePathModule(repURL.pathname, 'repPage.html');
    return repURL
};

let makeNewRepCard = function (name, numStars, lastCommit, repLink) {
    let newCard = itemTemplate.cloneNode(true);
    let newName = newCard.querySelector('.repNameForList');
    newName.textContent = name;
    newName.href = repPageURL(name);    
    let newStarsNum = newCard.querySelector('.repStarsNumForList');
    newStarsNum.textContent = numStars;
    let newLastCommit = newCard.querySelector('.lastCommitForList')
    newLastCommit.textContent += lastCommit;
    let newRepLink = newCard.querySelector('.repLink');
    newRepLink.href = repLink;
    listRep.append(newCard);
};

let listRepPainterModule = function(arr) {
    let newTitle = document.createElement('h2');
    newTitle.classList.add('contentContainer__title', 'fontDefault');
    let nowURL = new URL (window.location.href);
    if (nowURL.searchParams.has('search')) {
        newTitle.textContent = 'Репозитории найденные по запросу "' + nowURL.searchParams.get('search') + '"';
    } else {
        newTitle.textContent = '10 самых популярных репозиториев';
    }
    
    listRep.append(newTitle);

    for (let i = 0; i < arr.length; i++) {
        makeNewRepCard(arr[i].name, arr[i].numStars, arr[i].lastCommit, arr[i].repLink);
    };

    contentContainer.prepend(listRep);
};

export default listRepPainterModule;