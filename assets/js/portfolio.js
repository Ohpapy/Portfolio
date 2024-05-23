$('#carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
});

if (window.matchMedia("(max-width: 768px)").matches) {
    $('.single-item').slick();
}

const reseau = document.querySelector('#reseau');
reseau.addEventListener('click', function() {
    const modalReseau = document.querySelector('#modal-reseau');
    modalReseau.classList.add('active');
    const modalBg = document.querySelector('#modal-bg');
    modalBg.classList.add('active');
});

const closeModalReseau = document.querySelector('#close-reseau');
closeModalReseau.addEventListener('click', function() {
    const modalReseau = document.querySelector('#modal-reseau');
    modalReseau.classList.remove('active');
    const modalBg = document.querySelector('#modal-bg');
    modalBg.classList.remove('active');
});

const php = document.querySelector('#php');
php.addEventListener('click', function() {
    const modalphp = document.querySelector('#modal-php');
    modalphp.classList.add('active');
    const modalBg = document.querySelector('#modal-bg');
    modalBg.classList.add('active');
});

const closeModalphp = document.querySelector('#close-php');
closeModalphp.addEventListener('click', function() {
    const modalphp = document.querySelector('#modal-php');
    modalphp.classList.remove('active');
    const modalBg = document.querySelector('#modal-bg');
    modalBg.classList.remove('active');
});

const html = document.querySelector('#html');
html.addEventListener('click', function() {
    const modalhtml = document.querySelector('#modal-html');
    modalhtml.classList.add('active');
    const modalBg = document.querySelector('#modal-bg');
    modalBg.classList.add('active');
});

const closeModalhtml = document.querySelector('#close-html');
closeModalhtml.addEventListener('click', function() {
    const modalhtml = document.querySelector('#modal-html');
    modalhtml.classList.remove('active');
    const modalBg = document.querySelector('#modal-bg');
    modalBg.classList.remove('active');
});

const comm = document.querySelector('#comm');
comm.addEventListener('click', function() {
    const modalcomm = document.querySelector('#modal-comm');
    modalcomm.classList.add('active');
    const modalBg = document.querySelector('#modal-bg');
    modalBg.classList.add('active');
});

const closeModalcomm = document.querySelector('#close-comm');
closeModalcomm.addEventListener('click', function() {
    const modalcomm = document.querySelector('#modal-comm');
    modalcomm.classList.remove('active');
    const modalBg = document.querySelector('#modal-bg');
    modalBg.classList.remove('active');
});