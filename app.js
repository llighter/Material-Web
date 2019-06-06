import { MDCRipple } from '@material/ripple/index';
import { MDCTopAppBar } from '@material/top-app-bar';


// Instantiation

// ripple
const ripple = new MDCRipple(document.querySelector('.foo-button'));

// top-app-bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

