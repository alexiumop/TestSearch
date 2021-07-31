import axios from 'axios';

const header = { 'Content-Type': 'application/json' };
const httpClient = {
    summoner(reqUrl, reqMethod) {
        return axios({
            url: reqUrl,
            headers: header,
            method: reqMethod,
            responseType: 'json'
        });
    },
    //para obtener resultados de la busqueda :)
    getSimpleSearch(queryParam) {
        const urlForSearch = `https://api.mercadolibre.com/sites/MLA/search?q=:${queryParam}`;
        return this.summoner(urlForSearch, 'GET');
    }
}

export default httpClient;