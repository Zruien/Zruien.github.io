function nextPage(nextPageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(nextPageId).style.display = 'flex';
}

function prePage(prevPageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(prevPageId).style.display = 'flex';
}


