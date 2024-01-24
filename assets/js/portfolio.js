$('#carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
});

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