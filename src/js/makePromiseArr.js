import getRequestModule from '@js/getRequest';
export default function makePromiseArrModule(arr, timeout) {
    let promiseArr = arr.map(function(url) {
        return  Promise.race([
            getRequestModule(url),
            new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, коммит не получен'), timeout))
        ])       
    });
    return promiseArr
};