import getRequestModule from '@js/getRequest';
import makePromiseArrModule from '@js/makePromiseArr';

let getItemsForListModule = function(url) {
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
            obj.listCommits = makePromiseArrModule(obj.listCommits);
        })
        .then(() => {
            Promise.race([
                Promise.all(obj.listCommits),
                new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, коммиты не полученны'), 700))
            ]).then(value => {
                value.forEach(function(item, i, arr) {
                    obj.listItems[i].lastCommit = value[i][0].commit.committer.date
                });
                delete obj.listCommits
            }).then(() => resolve(obj))
            .catch(err => console.log(err));
        })        
    })
    .catch(err => console.log(err));
};

export default getItemsForListModule;