const span = document.querySelector('.selected-option');
const userOption = window.sessionStorage.getItem('option-selected');

span.innerText = `You selected ${userOption} out of 5.`;

