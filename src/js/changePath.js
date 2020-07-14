export default function changePathModule(srcPath, toPage) {    
    if (srcPath === '/') {
        return toPage;
    } else {
        if (srcPath.indexOf(toPage) >= 0) {
            return srcPath;
        } else {
            let newPath = '';
            if (toPage === 'index.html') {
                newPath = srcPath.slice(0, srcPath.length-12) + toPage;
            };    
            if (toPage === 'repPage.html') {
                newPath = srcPath.slice(0, srcPath.length-10) + toPage;
            };
            return newPath
        }
    };
}