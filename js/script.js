console.log("Javascript code run");
const navbarToggler = document.querySelector('.navbar__top--toggler');
const navbarCollapse = document.querySelector('.navbar__collapse');

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('change');
    navbarCollapse.classList.toggle('show__nav');
});
const month=['Jan', 'Febr', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let date = new Date();
let day = date.getDay() + 1;
const element = document.querySelector('.actually_tomorrow');
element.innerHTML = month[date.getMonth()] + ' ' + day + ',' + date.getFullYear();

const sumElement = document.querySelector('.sum');
const totalPrice = document.querySelector('.subtotal');
totalPrice.innerHTML = "$" + 0;
let count = 0;
let adultPrice = 8;
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
sumElement.innerHTML = count;
minus.addEventListener('click', () => {
    if (count <= 0) {
        sumElement.innerHTML = 0;
    } else {
        count--
        sumElement.innerHTML = count;
        totalPrice.innerHTML= "$" + count*8
    }
})
plus.addEventListener('click', () => {
    count++
    sumElement.innerHTML = count;
    totalPrice.innerHTML= "$" + count*8
});




