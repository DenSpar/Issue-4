import pageListenerModule from '@js/pageListener';
//delete
let contentContainer = document.querySelector('#contentContainer');
let itemTemplateContent = contentContainer.querySelector('#repItemTemplate').content;
let itemTemplate = itemTemplateContent.querySelector('.contentContainer__listRep_itemContainer');

let listRep = document.createElement('div');
listRep.classList.add('contentContainer__listRep', 'flex', 'justify-content_space-between', 'flex-wrap');

let makeNewRepCard = function (name, numStars, lastCommit, repLink) {
    let newCard = itemTemplate.cloneNode(true);
    let newName = newCard.querySelector('.repNameForList');
    newName.textContent = name;
    //delete
    // может реализовать через href & target:_blank?
    pageListenerModule(newName);
    //delete
    let newStarsNum = newCard.querySelector('.repStarsNum');
    newStarsNum.textContent = numStars;
    let newLastCommit = newCard.querySelector('.lastCommit')
    newLastCommit.textContent += lastCommit;
    let newRepLink = newCard.querySelector('.repLink');
    newRepLink.href = repLink;
    listRep.append(newCard);
};

let listRepPainterModule = function(arr) {
    let newTitle = document.createElement('h2');
    newTitle.classList.add('contentContainer__listRep_listTitle', 'fontDefault');
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