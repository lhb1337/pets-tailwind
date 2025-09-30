const elementHTML = document.querySelector('html')
const btnMode = document.querySelector('#btnMode')
btnMode.addEventListener('click', () => {
    elementHTML.classList.toggle('dark')
})