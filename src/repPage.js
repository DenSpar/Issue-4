import './styles/styles.css';
import inputListenerModule from '@js/inputListener';
import getRepForPageModule from '@js/getRepForPage';
import repPagePainterModule from '@js/repPagePainter';

inputListenerModule();

getRepForPageModule()
.then(repository => {
    repPagePainterModule(repository);
})
.catch(err => console.log(err));