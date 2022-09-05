export const BASE_URL = "http://79.143.31.216";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

const jwt = localStorage.getItem('jwt');
export const getStatistics = () => {
    return fetch(`${BASE_URL}/statistics`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + jwt,

        },
    }).then(checkResponse);
};

export const redirect = (shortLink) => {
    return fetch(`${BASE_URL}/s/${shortLink}`, {
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        },
    }).then(checkResponse);
};