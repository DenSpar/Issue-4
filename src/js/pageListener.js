//delete all
export default function pageListenerModule(item) {
    item.onclick = function(evt) {
        evt.preventDefault();
        let urlTest = new URL(window.location.href);
        urlTest.searchParams.set('search', 'testSearch');
        urlTest.searchParams.set('page', 'testPage');
        console.log(urlTest);
        let otherWindow = window.open(urlTest);
        otherWindow.opener = null;
        console.log('here clicked some repName')
    }
};