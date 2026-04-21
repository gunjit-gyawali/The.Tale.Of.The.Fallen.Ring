const select = document.getElementById('chapterSelect');
select.addEventListener('change', function() {
    window.location.href = this.value;
});

function setSelectToCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    if (select.value !== currentPage) {
        select.value = currentPage;
    }
}

window.addEventListener('pageshow', setSelectToCurrentPage);
 