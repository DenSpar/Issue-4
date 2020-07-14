export default function dateHandlerModule(dateStr) {
    let date = new Date(Date.parse(dateStr));
    let newDateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    return newDateStr
};