import service from './apiService';
import templ from '../templ/templ.hbs';
import refs from './refs';


refs.searchForm.addEventListener('submit', imgSearch);
refs.loadMore.addEventListener('click', loadMoreBtn);

function imgSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.query;

    clearList();

    service.reset();
    service.search = input.value;

    service.fetcArticles().then(hits => {
        const build = buildList(hits);
        listItem(build);
    });
    input.value = '';
}

    function loadMoreBtn() {
    service.fetcArticles().then(hits => {
        const build = buildList(hits);
        listItem(build);
        window.scrollTo(0, 1000);

        window.scrollTo({
            top: 1000,
            behavior: 'smooth',
        });
    });
}

function listItem(items) {
    refs.gallery.insertAdjacentHTML('beforeend', items);
}
function buildList(items) {
    return templ(items);
}
function clearList() {
    refs.gallery.innerHTML = '';
}