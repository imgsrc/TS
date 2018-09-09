let button = document.getElementById('button');
button.addEventListener('click', event => {
    let target = <HTMLButtonElement>event.target;
    console.log(target);
});
