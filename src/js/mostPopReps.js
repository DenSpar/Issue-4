let getMostPopRepsModule = function() {
    let requestURL = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1&per_page=10';

    function sendRequest(method, url) {
        return fetch(url).then(response => {
            return response.json()
        })
    };

    sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err));

    let arr = sendRequest('GET', requestURL).then(function(data) {
        var items = data.items;
        var count = data.total_count;
        console.log('items:');
        console.log(data.items);
        console.log('totalCount:');
        console.log(data.total_count);

        let i=0;
        console.log('test_first:');
        console.log('name: ' + data.items[i].full_name);
        console.log('numStars: ' + data.items[i].stargazers_count);
        sendRequest('GET', 'https://api.github.com/repos/' + data.items[i].full_name + '/commits?per_page=1')
        .then(commit => console.log('lastCommit: ' + commit[0].commit.committer.date))
        .catch(err => console.log(err));
        console.log('repLink: ' + data.items[i].html_url);    
    });
};

export default getMostPopRepsModule;