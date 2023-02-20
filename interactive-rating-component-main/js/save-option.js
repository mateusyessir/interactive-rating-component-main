const btnsAvaliation = document.querySelectorAll('#btn-avaliation');
const btnSubmit = document.querySelector('.btn-submit');

btnsAvaliation.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.sessionStorage.setItem('option-selected', btn.dataset.value);
        if (window.sessionStorage.getItem('option-selected')) {
            btnSubmit.disabled = false;
        }
    });
});

