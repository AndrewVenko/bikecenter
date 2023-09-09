const textBtn = setInterval(() => {
    if (window.innerWidth <0 640) {
        document.querySelector('.delivery__btn').textContent = 'Узнать подробнее';
    } else {
        document.querySelector('.delivery__btn').textContent = 'Расчитать доставку';
    }
}, 1);