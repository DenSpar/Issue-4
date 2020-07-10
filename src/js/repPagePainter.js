let contentContainer = document.querySelector('#contentContainer');
let repPageTemplateContent = contentContainer.querySelector('#repPageTemplate').content;
let repPageTemplate = repPageTemplateContent.querySelector('.repContainer__repPageContainer');

let makeSpanItems = function (arr, where, itemClass) {
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('span');
        item.classList.add('fontDefault', 'badge', itemClass);
        item.textContent = arr[i]
        where.append(item);
    };
};

let repPagePainterModule = function (repObj) {
    let newCard = repPageTemplate.cloneNode(true);
    let newName = newCard.querySelector('.repNameForPage');    
    newName.textContent = repObj.repName;
    let newStarsNum = newCard.querySelector('.repStarsNumForPage');
    newStarsNum.textContent = repObj.numStars;
    let newLastCommit = newCard.querySelector('.lastCommitForPage')
    newLastCommit.textContent += repObj.lastCommit;
    let newOwnerFace = newCard.querySelector('.repContainer__repPageContainer_repOwner_face');
    newOwnerFace.src = repObj.ownerFace;
    let newOwnerName = newCard.querySelector('.repContainer__repPageContainer_repOwner_ownerName');
    newOwnerName.textContent = repObj.ownerName;
    let languagesContainer = newCard.querySelector('.repContainer__repPageContainer_repLanguages');
    makeSpanItems(repObj.languages, languagesContainer, 'language');
    let newDescription = newCard.querySelector('.repContainer__repPageContainer_repDescription');
    if (repObj.description) {
        newDescription.textContent += repObj.description;
    } else {
        newDescription.textContent += ' отсутствует';
    };
    let contributorsContainer = newCard.querySelector('.repContainer__repPageContainer_repContributors');
    makeSpanItems(repObj.contributors, contributorsContainer, 'contributor');
    contentContainer.append(newCard);
};

export default repPagePainterModule;