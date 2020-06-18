let requestURL = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1&per_page=10';

function sendRequest(method, url) {
    return fetch(url).then(response => {
        return response.json()
    })
};

sendRequest('GET', requestURL)
.then(data => console.log(data))
.catch(err => console.log(err));