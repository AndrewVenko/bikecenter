const textBtn = setInterval(() => {
    if (window.innerWidth <= 640) {
        document.querySelector('.delivery__btn').textContent = 'Узнать подробнее';

        document.querySelector('.info-contacts__mobile-text-watsapp').textContent = 'Написать в WhatsApp';

        document.querySelector('.info-contacts__mobile-text-telegram').textContent = 'Написать в Telegram';

        document.querySelector('.info__link-mobile').textContent = 'Позвонить 8 (800) 500-03-20';
    } else {
        document.querySelector('.delivery__btn').textContent = 'Расчитать доставку';

        document.querySelector('.info-contacts__mobile-text-watsapp').textContent = 'WhatsApp';

        document.querySelector('.info-contacts__mobile-text-telegram').textContent = 'Telegram';

        document.querySelector('.info__link-mobile').textContent = '8 (800) 500-03-20';
    };
}, 1);