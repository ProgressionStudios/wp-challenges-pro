/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./src/accordion/accordion copy/view.js ***!
  \**********************************************/
const links = document.querySelectorAll('.title-accordion-pro');
links.forEach(link => {
  link.addEventListener('click', () => {
    link.parentNode.classList.toggle('hide');
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map