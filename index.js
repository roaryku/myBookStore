const search = document.querySelector('#inputSearch');
const myBooks = document.querySelectorAll('.bookSearch');

search.addEventListener('keyup', (e) => {
    const word = e.target.value.toLowerCase();
    myBooks.forEach(item => {
        item.querySelector('h3').textContent.toLowerCase().includes(word)
        || item.querySelector('p').textContent.toLowerCase().includes(word)
        ? (item.style.display = "block")
        : (item.style.display = "none")
    })
})


