import './styles/styles.css';
import inputListenerModule from '@js/inputListener';
import getRepForPageModule from '@js/getRepForPage';
import repPagePainterModule from '@js/repPagePainter';
import changeTitleModule from '@js/changeTitle';

changeTitleModule()
inputListenerModule();

getRepForPageModule()
.then(repository => {
    repPagePainterModule(repository);
})
.catch(err => console.log(err));