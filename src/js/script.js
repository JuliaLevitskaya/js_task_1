const buttons = document.querySelectorAll('.header__number[data-id]');

buttons.forEach(button => {
    const dataId = button.getAttribute('data-id');
    button.addEventListener('click', () => {
        setActiveButton(dataId);
        setContentBlockInner(dataId);
    });
});

function setContentBlockInner(inner) {
    const active = document.querySelector('.info__field--active');
    const fieldToBeActive = document.querySelector(`.info__field[data-id="${inner}"]`);

    if (active) {
        active.classList.remove('info__field--active');
    }

    if (fieldToBeActive) {
        fieldToBeActive.classList.add('info__field--active');
    }
}

function setActiveButton(inner) {
    const active = document.querySelector('.header__number-active');
    const fieldToBeActive = document.querySelector(`.header__number[data-id="${inner}"]`);

    if (active) {
        active.classList.remove('header__number-active');
    }

    if (fieldToBeActive) {
        fieldToBeActive.classList.add('header__number-active');
    }
}