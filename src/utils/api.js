import axios from 'axios';

const axiosBase = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Authorization": "Bearer " + process.env.REACT_APP_STRAPI_TOKEN,
        'Content-Type': 'application/json'
    }

});

const createAccount = async (fullname, email, mobile) => {
    const response = await axiosBase.post(`accounts`, {
        data: {
            fullname: fullname,
            email: email,
            mobile: mobile
        }
    });

    return response;
}

export { createAccount }