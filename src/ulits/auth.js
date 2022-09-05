export const BASE_URL = "http://79.143.31.216";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (username, password) => {
  return fetch(`${BASE_URL}/register?username=${username}&password=${password}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export const authorize = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: 'username=' + encodeURIComponent(username) +
    '&password=' + encodeURIComponent(password)  ,
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.setItem("jwt", data.access_token);
      console.log(data.access_token);
      return data;
    });
};
