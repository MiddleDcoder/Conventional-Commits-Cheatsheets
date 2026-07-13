var menuToggle = document.querySelector('.menu-toggle');
var topnav = document.querySelector('.topnav');

if (menuToggle && topnav) {
    menuToggle.addEventListener('click', function () {
        var isOpen = topnav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    topnav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            topnav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            topnav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}