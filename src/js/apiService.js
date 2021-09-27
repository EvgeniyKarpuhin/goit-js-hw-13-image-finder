import Notiflix from 'notiflix';
const base = 'https://pixabay.com/api/';
const url = `?image_type=photo&orientation=horizontal&q=`;
const key = '23515098-6ca4d9d130a27025c1d21d34d';

export default {
    page: 1,
    query: '',
    async fetcArticles(query) {
        const param = `${base}${url}${this.query}&page=${this.page}&per_page=12&key=${key}`;
        // const sum = await fetch(base + param);
        // const resp = await sum.json();
        return fetch(param)
        // this.bigest();
        // return resp.u
        .then(response => {
            if(response.ok) return response.json();
        })
        .then(data => {
            this.page += 1;
            console.log(data);
            return data;
        })
        .catch(err => Notiflix.Notify.failure(`${err}`));
    },
    get search() {
        return this.query;
    },
    set search(string) {
        this.query = string;
    },
    reset() {
        this.page = 1;
    },
};