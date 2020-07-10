import getRepForPageModule from '@js/getRepForPage';
import repPagePainterModule from '@js/repPagePainter';

export default function showPageModule() {    
    getRepForPageModule()
    .then(repository => {
        repPagePainterModule(repository);
    })
    .catch(err => console.log(err));
};