import makeItemsListModule from '@js/makeItemsList';
export default function makeRepsListModule(url, timeout) {
    return Promise.race([
        makeItemsListModule(url),
        new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, репозитории не полученны'), timeout))
    ])
};