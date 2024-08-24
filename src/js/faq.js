document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpened = item.classList.contains('opened');

            faqItems.forEach(el => el.classList.remove('opened'));
            faqItems.forEach(el => el.querySelector('.faq-answer').style.height = '0');

            if (!isOpened) {
                item.classList.add('opened');
                answer.style.height = answer.scrollHeight + 'px';
            }
        });
    });
});
