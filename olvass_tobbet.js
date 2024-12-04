const articles = document.querySelectorAll('.et_szazalek');
for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const ul = article.querySelector('section ul');
    if (ul) {
        ul.style.display = 'none';
        const button = document.createElement('button');
        button.textContent = 'Olvass el';
        button.classList.add('olvas_el_gomb')
        button.addEventListener('click', function () {
            if (ul.style.display === 'none') {
                ul.style.display = 'block';
                button.textContent = 'Vissza';
            }
            else {
                ul.style.display = 'none';
                button.textContent = 'Olvass el';
            }
        });
        article.appendChild(button);
    }
}
