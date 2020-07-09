//delete all
export default function pageListenerModule(item) {
    item.onclick = function(evt) {
        evt.preventDefault();
        let repURL = new URL(window.location.href);
        repURL.searchParams.delete('search');
        repURL.searchParams.delete('page');
        repURL.searchParams.set('repName', item.textContent);
        console.log(repURL);
        let otherWindow = window.open(repURL);
        otherWindow.opener = null;
        console.log('here clicked some repName')
    }
};