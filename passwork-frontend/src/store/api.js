const BASE_URL = 'http://127.0.0.1:5000/folders';

export default class Api {
    static getFolders() {
        const url = BASE_URL;
        return fetch(url, {
            method: 'GET'
        });
    }
}