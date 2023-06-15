const BASE_URL = 'http://127.0.0.1:5000';

export default class Api {
    static getFolders() {
        const url = BASE_URL + "/folders";

        return fetch(url, {
            method: 'GET'
        });
    }
}