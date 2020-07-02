import getRequestModule from '@js/getRequest';
import makePromiseArrModule from '@js/makePromiseArr';

let makeItemsListModule = function(url) {
    return new Promise((resolve, reject) => {
        getRequestModule(url)
        .then(function(data) {
            let obj = {
                totalCount: data.total_count,
                listItems: [],
                listCommits: []
            };

            for (let i = 0; i < data.items.length; i++) {
                let item = {
                    name: data.items[i].full_name,
                    numStars: data.items[i].stargazers_count,                        
                    repLink: data.items[i].html_url
                };
                obj.listItems.push(item);
                obj.listCommits.push('https://api.github.com/repos/' + data.items[i].full_name + '/commits?per_page=1');
            };
            
            obj.listCommits = makePromiseArrModule(obj.listCommits);

            resolve(obj)
        })
        .catch(err => console.log(err));
    })
};

export default makeItemsListModule;