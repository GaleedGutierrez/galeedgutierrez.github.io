function goToNextPage () {
    location.href = './html/index.html';
}

const body = document.querySelector('body');
body.onload = () => goToNextPage();

