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

let listRepPainterModule = function(arr) {
    listRep.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        makeNewRepCard(arr[i].name, arr[i].numStars, arr[i].lastCommit, arr[i].repLink);
    };

    listRepContainer.prepend(listRep);
};

export default listRepPainterModule;