let requestURL = 'https://api.github.com/search/repositories?q=tetris&sort=stars&page=1&per_page=10';

function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json()
    })
};

sendRequest('GET', requestURL)
.then(data => console.log(data))
.catch(err => console.log(err));