const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

btn.onclick = () => alert("Hello World2");

btn.addEventListener('click', function (e) {
    console.log(e);
});


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World3");
});