import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Authorization": "Bearer " + process.env.REACT_APP_STRAPI_TOKEN,
        'Content-Type': 'application/json'
    }

});