let title = document.querySelector('title');
let nowUrl = new URL (window.location.href);

export default function changeTitleModule() {
    if (nowUrl.searchParams.has('repName')) {
        title.textContent = nowUrl.searchParams.get('repName');
    };

    if (nowUrl.searchParams.has('search')) {
        title.textContent = 'Поиск: ' + nowUrl.searchParams.get('search');
    };
};