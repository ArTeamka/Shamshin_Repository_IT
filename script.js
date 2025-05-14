// Обработчик для кнопки "Узнать больше"
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Спасибо за интерес к нашей компании! Мы скоро с вами свяжемся.');
});

// Плавная прокрутка для навигации
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Проверка поддержки сервис-воркеров
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}