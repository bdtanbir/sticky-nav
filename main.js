
const navbar = document.querySelector('#main');
let topOfNav = navbar.offsetTop;
console.log(topOfNav);

function fixedNav() {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
        // document.body.style.paddingTop = topOfNav + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        // document.body.style.paddingTop = '0px';
    }
}
window.addEventListener('scroll', fixedNav);
