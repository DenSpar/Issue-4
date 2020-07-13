import getRequestModule from '@js/getRequest';
import writeTitleModule from '@js/contentTitle';

let nowURL = new URL (window.location.href);
let requestURL = 'https://api.github.com/repos/' + nowURL.searchParams.get('repName');
//let urlForTest = 'https://api.github.com/repos/' + 'DenSpar/Lex-Shop';

let makeContributorsArr = function (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].login);
    };
    return newArr
};

let makeSecondRequestArr = function(targetObj, timeout) {
    return [
        Promise.race([
            getRequestModule(targetObj.lastCommit),
            new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, дата последнего коммита не получена'), timeout))
        ]),
        Promise.race([
            getRequestModule(targetObj.languages),
            new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, языки не получены'), timeout))
        ]),
        Promise.race([
            getRequestModule(targetObj.contributors),
            new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, контрибуторы не получены'), timeout))
        ])
    ];
};

let allSettledResponseHandler = function (dataItem, targetObj) {
    if (dataItem[0].status === "fulfilled") {
        targetObj.lastCommit = dataItem[0].value[0].commit.committer.date;
    } else {
        targetObj.lastCommit = '-'
    };

    if (dataItem[1].status === "fulfilled") {
        targetObj.languages = Object.keys(dataItem[1].value);
    } else {
        targetObj.languages = '-';
    };

    if (dataItem[2].status === "fulfilled") {
        targetObj.contributors = makeContributorsArr(dataItem[2].value);
    } else {
        targetObj.contributors = '-';
    };
};

let getRepForPageModule = function () {
    return new Promise((resolve, reject) => {
        let obj = {};
        getRequestModule(requestURL)
        .then(repsData => {
            obj.repName = repsData.name;
            obj.numStars = repsData.stargazers_count;
            obj.lastCommit = 'https://api.github.com/repos/' + repsData.full_name + '/commits?per_page=1';
            obj.ownerFace = repsData.owner.avatar_url;
            obj.ownerName = repsData.owner.login;
            obj.languages = repsData.languages_url;
            obj.description = repsData.description;
            obj.contributors = repsData.contributors_url + '?per_page=10'
        }, () => {
            writeTitleModule('что-то пошло не так :(<br>Попробуйте перезагрузить страницу');
        })
        .then(() => {
            Promise.allSettled(makeSecondRequestArr(obj, 500))
            .then(secondRequestData => {
                allSettledResponseHandler(secondRequestData, obj);
            })
            .then(() => resolve(obj))
        })
    })
    .catch(err => console.log(err));
};

export default getRepForPageModule;