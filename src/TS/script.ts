const textBtn = setInterval(() => {
    if (window.innerWidth < 641) {
        document.querySelector('.delivery__btn').textContent = 'Узнать подробнее';
    } else {
        document.querySelector('.delivery__btn').textContent = 'Расчитать доставку';
    }
}, 1);