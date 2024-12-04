const articles = document.querySelectorAll('.feher_tipusok_belso');
for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener('mouseover', function () {
        articles[i].style.backgroundColor = '#FFE6A7';
        articles[i].style.border = "thin solid #432818";
    });
    articles[i].addEventListener('mouseout', function () {
        articles[i].style.backgroundColor = '';
        articles[i].style.border = "";
    });
}