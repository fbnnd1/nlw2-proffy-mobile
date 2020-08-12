import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://localhost:8080' - ip que aparece QRcode
    baseURL: 'http://192.168.0.10:8080'
});

export default api;