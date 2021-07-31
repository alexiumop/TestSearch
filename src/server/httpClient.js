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
    },
    //para obtener producto por id
    getSimpleProductById(id) {
        const urlDetailByid = `https://api.mercadolibre.com/items/${id}`;
        return this.summoner(urlDetailByid, 'GET');
    },
    //para obtener la descripción del producto con su id
    getSimpleProductByIdDesc(id) {
        const urlDescriptionByid = `https://api.mercadolibre.com/items/${id}/description`;
        return this.summoner(urlDescriptionByid, 'GET');
    }
}

export default httpClient;