import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=233&offset=151'
});

export default api;
