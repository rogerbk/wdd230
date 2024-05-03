const darkBtn = document.querySelector('#darkBtn');
const body = document.body;

darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
