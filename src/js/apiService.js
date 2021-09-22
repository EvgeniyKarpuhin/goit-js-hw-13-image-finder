const base = 'https://pixabay.com/api/';

export default {
    page: 1,
    query: '',
    async fetcArticles(query) {
        const key = '23515098-6ca4d9d130a27025c1d21d34d';
        const param = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=${key}`;
        const sum = await fetch(`${base + param}`);
        const resp = await sum.json();
        this.bigest();
        return resp.u
    },
    get search() {
        return this.query;
    },
    set search(string) {
        this.query = string;
    },
    bigest() {
        this.page += 1;
    },
    reset() {
        this.page = 1;
    },
};