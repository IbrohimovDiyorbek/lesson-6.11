// 1
document.getElementById('but').addEventListener('click', function () {
    alert('Button clicked!');
});
// 2
document.getElementById('hover').addEventListener('mouseover', function () {
    this.style.backgroundColor = 'blue';
});
// 3
document.getElementById('int').addEventListener('keydown', function (event) {
    console.log(`Key pressed: ${event.key}`);
});
// 4
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!');
});
// 5
window.addEventListener('resize', function () {
    console.log(`Window size: ${window.innerWidth} x ${window.innerHeight}`);
});
// 6
window.addEventListener('scroll', function () {
    console.log(`Scroll position: ${window.scrollY}`);
});
// 7
document.getElementById('select').addEventListener('change', function () {
    alert(`Selected: ${this.value}`);
});
// 8
document.getElementById('input').addEventListener('input', function () {
    console.log(`Current value: ${this.value}`);
});
// 9
document.getElementById('focusInput').addEventListener('focus', function () {
    console.log('Input focused');
});
// 10
document.getElementById('clickDiv').addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Right-clicked on the div!');
});