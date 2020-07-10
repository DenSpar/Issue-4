import getRequestModule from '@js/getRequest';

let nowURL = new URL (window.location.href);
let requestURL = 'https://api.github.com/repos/' + nowURL.searchParams.get('repName');
//let urlForTest = 'https://api.github.com/repos/' + 'DenSpar/Lex-Shop';

let makeContributorsArr = function (arr) {
    //если котрибуторов нет и придет пустой массив?
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].login);
    };
    return newArr
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
                Promise.all([
                    getRequestModule(obj.lastCommit),
                    getRequestModule(obj.languages),
                    getRequestModule(obj.contributors)
                ]),
                new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, данные не полученны'), 3000))
            ])
            .then(value => {
                obj.lastCommit = value[0][0].commit.committer.date;
                obj.languages = Object.keys(value[1]);
                obj.contributors = makeContributorsArr(value[2]);
            })
            .then(() => resolve(obj))
        })
    })
    .catch(err => console.log(err));
};

export default getRepForPageModule;