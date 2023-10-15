const textBtn = setInterval(() => {
    if (window.innerWidth <= 640) {
        document.querySelector('.delivery__btn').textContent = 'Узнать подробнее';

        document.querySelector('.info-contacts__mobile-text-watsapp').textContent = 'Написать в WhatsApp';

        document.querySelector('.info-contacts__mobile-text-telegram').textContent = 'Написать в Telegram';

        document.querySelector('.info__link-mobile').textContent = 'Позвонить 8 (800) 500-03-20';

        document.querySelector('.info-form__header').textContent = 'Подпишитесь на наши новости';

        document.querySelector('.info-form__input').placeholder = 'Введите свой e-mail';

        document.querySelector('.info-form__btn').value = '\u{1F862}';
        
    } else {
        document.querySelector('.delivery__btn').textContent = 'Расчитать доставку';

        document.querySelector('.info-contacts__mobile-text-watsapp').textContent = 'WhatsApp';

        document.querySelector('.info-contacts__mobile-text-telegram').textContent = 'Telegram';

        document.querySelector('.info__link-mobile').textContent = '8 (800) 500-03-20';

        document.querySelector('.info-form__header')?.textContent = 'Узнайте о скидках первым';

        document.querySelector('.info-form__input').placeholder = 'Ваш email-адрес';

        document.querySelector('.info-form__btn').value = 'Подписаться';

    };
}, 1);

const btnCatalog = document.querySelector('.search__catalog-button');
const catalogBox = document.querySelector('.menu-catalog');
btnCatalog.addEventListener('click', () => {
    if(catalogBox.classList.contains('menu-catalog--visibility')) {
        catalogBox.classList.remove('menu-catalog--visibility');
    } else {
        catalogBox.classList.add('menu-catalog--visibility');
    }
})