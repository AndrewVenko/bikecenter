const textBtn = setInterval(() => {
    if (window.innerWidth <= 640) {
        document.querySelector('.delivery__btn').textContent = 'Узнать подробнее';

        document.querySelector('.info-contacts__mobile-text-watsapp').textContent = 'Написать в WhatsApp';

        document.querySelector('.info-contacts__mobile-text-telegram').textContent = 'Написать в Telegram';

        document.querySelector('.info__link-mobile').textContent = 'Позвонить 8 (800) 500-03-20';

        document.querySelector('.info-form__header').textContent = 'Подпишитесь на наши новости';

        document.querySelector('.info-form__input').placeholder = 'Введите свой e-mail';

        document.querySelector('.info-form__btn').value = '\u{1F862}';

        document.querySelector('.copyrights__text-mobile').textContent = `Интернет-магазин "Байк Центр" ® bike-сentre.ru`;
        
    } else {
        document.querySelector('.delivery__btn').textContent = 'Расчитать доставку';

        document.querySelector('.info-contacts__mobile-text-watsapp').textContent = 'WhatsApp';

        document.querySelector('.info-contacts__mobile-text-telegram').textContent = 'Telegram';

        document.querySelector('.info__link-mobile').textContent = '8 (800) 500-03-20';

        document.querySelector('.info-form__header')?.textContent = 'Узнайте о скидках первым';

        document.querySelector('.info-form__input').placeholder = 'Ваш email-адрес';

        document.querySelector('.info-form__btn').value = 'Подписаться';

        document.querySelector('.copyrights__text-mobile').textContent = `Сеть магазинов "Байк Центр" ® — bike-сentre.ru`;
    };
}, 1);