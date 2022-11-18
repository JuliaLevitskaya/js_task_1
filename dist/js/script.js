const secondButton = document.querySelector('.header__number[data-id="2"]');
// const secondButton = document.querySelectorAll('.header__number')[1];

console.log(secondButton);

function handleClick() {
    document.querySelector('.info__descr[data-id="12"]').innerHTML = "2";

}

secondButton.addEventListener('click', handleClick);