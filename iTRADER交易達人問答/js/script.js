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

function checkAnswer(button, nextPageId, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct-answer');
        setTimeout(() => {
            nextPage(nextPageId);
        }, 500); 
    } else {
        button.classList.add('wrong-answer');
        setTimeout(() => {
            button.classList.remove('wrong-answer');
        }, 500);
    }
}
