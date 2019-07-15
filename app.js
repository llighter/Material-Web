import { MDCRipple } from '@material/ripple/index';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';


// // Instantiation

// // ripple
// const ripple = new MDCRipple(document.querySelector('.foo-button'));

// top-app-bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// // tap bar
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// card
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
// const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
//   return new MDCRipple(el);
// });


// tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
//   document.querySelectorAll('.adopt-a-pup-body').forEach((element, index) => {
//     if (index === activatedEvent.detail.index) {
//       element.classList.remove('adopt-a-pup-body--hidden');
//     } else {
//       element.classList.add('adopt-a-pup-body--hidden');
//     }
//   });
// });

