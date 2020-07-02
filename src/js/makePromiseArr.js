import getRequestModule from '@js/getRequest';
export default function makePromiseArrModule(arr) {
    let promiseArr = arr.map(function(url) {
        return getRequestModule(url)        
    });
    return promiseArr
};