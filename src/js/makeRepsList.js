import getRequestModule from '@js/getRequest';
import dateHandlerModule from '@js/dateHandler';

let makePromiseArr = function(arr, timeout) {
    let promiseArr = arr.map(function(url) {
        return  Promise.race([
            getRequestModule(url),
            new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, дата последнего коммита не получена'), timeout))
        ])
    });
    return promiseArr
};

let getItemsForList = function(url) {
    return new Promise((resolve, reject) => {
        let obj = {
                listItems: [],
                listCommits: []
            };
        getRequestModule(url)
        .then(function(data) {
            for (let i = 0; i < data.items.length; i++) {
                let item = {
                    name: data.items[i].full_name,
                    numStars: data.items[i].stargazers_count,                        
                    repLink: data.items[i].html_url
                };
                obj.listItems.push(item);
                obj.listCommits.push('https://api.github.com/repos/' + data.items[i].full_name + '/commits?per_page=1');
            };
            obj.totalCount = data.total_count;
            obj.listCommits = makePromiseArr(obj.listCommits, 700);
        })
        .then(() => {
            Promise.allSettled(obj.listCommits)
            .then(commitData => {
                commitData.forEach(function(item, i, arr) {
                    if (commitData[i].status === "fulfilled" && Array.isArray(commitData[i].value)) {
                        let newCommitDate = commitData[i].value[0].commit.committer.date;
                        obj.listItems[i].lastCommit = dateHandlerModule(newCommitDate);
                    } else {
                        obj.listItems[i].lastCommit = '-';
                    };
                });
                delete obj.listCommits
            }).then(() => resolve(obj))
        })        
    })
    .catch(err => console.log(err));
};

let  makeRepsListModule = function(url, timeout) {
    return Promise.race([
        getItemsForList(url),
        new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, репозитории не полученны'), timeout))
    ])
};

export default makeRepsListModule;