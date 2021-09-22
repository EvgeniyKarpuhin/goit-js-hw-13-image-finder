import service from './apiService';
import refs from './refs';
import templ from '../templ/templ.hbs';

refs.searchForm.addEventListener('submit', imgSearch);
refs.loadMore.addEventListener('click', loadMore);

function imgSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.query;

    clearList();

    service.reset();
    service.search = input.value;

    service.fetcArticles().then(u => {
        const build = buildList(u);
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