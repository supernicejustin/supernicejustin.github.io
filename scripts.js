document.addEventListener('DOMContentLoaded', () => {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = '좋은 아침입니다!';
    } else if (hours < 18) {
        greeting = '좋은 오후입니다!';
    } else {
        greeting = '좋은 저녁입니다!';
    }

    const header = document.querySelector('header h1');
    header.textContent = `${greeting} 최혁준 입니다!`;

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
