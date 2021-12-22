var searchHeader = document.querySelector('#icon-search');
var searchForm = document.querySelector('.search-form');
searchHeader.onclick = () => {
    searchHeader.classList.toggle('uil-times');
    searchForm.classList.toggle('active');
    listHeader.classList.remove('uil-times');
    listHeaderNav.classList.remove('active-tablet');
}

// list tablet
var listHeader = document.querySelector('#icon-list');
var listHeaderNav = document.querySelector('.header__nav');
var listHeaderLink = document.querySelectorAll('.header__nav-link');
listHeader.onclick = () => {
    listHeader.classList.toggle('uil-times');
    listHeaderNav.classList.toggle('active-tablet');
    searchForm.classList.remove('active')
    searchHeader.classList.remove('uil-times')
}

for (var link of listHeaderLink) {
    link.addEventListener('click', function() {
        listHeader.classList.remove('uil-times');
        listHeaderNav.classList.remove('active-tablet');
    })
}


