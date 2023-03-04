import { API_URL } from "./variables";

export const Get = async (path, headers = {}) => {
    let httpCode;
    let token = localStorage.getItem("token");
    if (token !== null) headers['Authorization'] = 'Bearer ' + token;

    headers = {
        "Accept": "application/json",
        ...headers
    }


    let response = await fetch(API_URL + path, {
        method: "GET",
        headers: headers
    })
        .then(res => {
            httpCode = res.status;
            return res.json();
        })
        .then(json => (json))
        .catch(err => console.log("Error to get: " + err.message));

    response["httpCode"] = httpCode;

    return response;
}

export const Post = async (path, body, headers = {}) => {
    let token = localStorage.getItem("token");
    if (token !== null) headers['Authorization'] = 'Bearer ' + token;

    headers = {
        "Accept": "application/json",
        ...headers
    }

    let httpCode;
    let response = await fetch(API_URL + path, {
        method: "POST",
        body: body,
        headers: headers
    })
        .then(async res => {
            httpCode = res.status;
            res = await res.json();
            return res;
        })
        .then(json => (json))
        .catch(err => console.error("Error to post: " + err.message));

    response["httpCode"] = httpCode;

    return response;
}