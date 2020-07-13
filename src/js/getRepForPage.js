import getRequestModule from '@js/getRequest';

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

let allSettledResponseHandler = function (dataItem, ifResolve, ifReject) {
    if (dataItem.status === "fulfilled") {
        return ifResolve
    } else {
        return ifReject
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
        })
        .then(() => {
            Promise.race([
                Promise.allSettled([
                    getRequestModule(obj.lastCommit),
                    getRequestModule(obj.languages),
                    getRequestModule(obj.contributors)
                ]),
                new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, данные не полученны'), 3000))
            ])
            .then(secondRequestData => {
                obj.lastCommit = allSettledResponseHandler (secondRequestData[0], (secondRequestData[0].value[0].commit.committer.date), '-');
                //obj.lastCommit = secondRequestData[0][0].commit.committer.date;
                obj.languages = allSettledResponseHandler (secondRequestData[1], Object.keys(secondRequestData[1].value), '-');
                //obj.languages = Object.keys(secondRequestData[1]);
                obj.contributors = allSettledResponseHandler (secondRequestData[2], makeContributorsArr(secondRequestData[2].value), '-');
                //obj.contributors = makeContributorsArr(secondRequestData[2]);
            })
            .then(() => resolve(obj))
        })
    })
    .catch(err => console.log(err));
};

export default getRepForPageModule;