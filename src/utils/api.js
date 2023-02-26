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

const createParticipation = async (id, fullname_ar, job_title, entity, honorific_title, sessions) => {
    const response = await axiosBase.post(`participation-remotes`, {
        data: {
            account: id,
            fullname_ar: fullname_ar,
            job_title: job_title,
            entity: entity,
            sessions: sessions,
            honorific_title: honorific_title,
        }
    });

    return response;
}

export { createAccount, createParticipation }