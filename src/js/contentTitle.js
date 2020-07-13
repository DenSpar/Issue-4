let contentTitle = document.querySelector('#contentTitle');

let writeTitleModule = function (title) {
    contentTitle.innerHTML = title;
    contentTitle.classList.remove('display-none');
};

export default writeTitleModule;