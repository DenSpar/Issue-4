import getItemsForListModule from '@js/getItemsForList';
export default function makeRepsListModule(url, timeout) {
    return Promise.race([
        getItemsForListModule(url),
        new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, репозитории не полученны'), timeout))
    ])
};