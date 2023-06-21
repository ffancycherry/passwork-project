const BASE_URL = 'http://localhost:5000';

export default class Api {
    static async getFolders() {
        const url = BASE_URL + "/folders";

        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors'
        });

        const text = await response.text();
        const json = await response.json();

        console.log(text);
        console.log(json);

        return response;
    }
}