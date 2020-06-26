import getRequestModule from '@js/getRequest';

let makeItemsListModule = function(url) {
    return new Promise((resolve, reject) => {
        getRequestModule(url)
        .then(function(data) {
            let obj = {
                totalCount: data.total_count
            }

            let arr = [];
            
            for (let i = 0; i < data.items.length; i++) {
    //            getRequestModule('https://api.github.com/repos/' + data.items[i].full_name + '/commits?per_page=1')
    //            .then(commit => {                
                    let item = {
                        name: data.items[i].full_name,
                        numStars: data.items[i].stargazers_count,
    //                    lastCommit: commit[0].commit.committer.date,
                        lastCommit: 'timeout',
                        repLink: data.items[i].html_url
                    };
                    arr.push(item);
    //            })
            };
            obj.listItems = arr;
            resolve(obj)
        })
    //    .then(function(itemsArr) {
    //        console.log(itemsArr);
    //    })
        .catch(err => console.log(err));
        })    
};

export default makeItemsListModule;