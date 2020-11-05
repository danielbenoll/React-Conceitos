import axios from 'axios';

const apiCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    headers:{
        'content-type':'application/json;charset=utf-8'
    }
})

export default apiCep;