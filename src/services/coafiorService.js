import * as request from './requester';


const baseUrl = 'http://localhost:3030/data';

export const getAllCoafior = () => request.get(`${baseUrl}/coafior`);


export const getMyPosts = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/coafior?where=${query}`);

}


export const createCoafior = async (coafiorData, token) => {
    let response = await fetch(`${baseUrl}/coafior`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...coafiorData, likes: [] })
    });

    let result = await response.json()
    return result;

};

export const updateCoafior = (coafiorId, coafiorData) => {
    request.put(`${baseUrl}/coafior/${coafiorId}`, coafiorData)
};


export const getOneCaofior = (coafiorId, signal) => {
    return fetch(`${baseUrl}/coafior/${coafiorId}`, { signal })
        .then(res => res.json())
}

export const destroyCoafior = (coafiorId, token) => {
    return fetch(`${baseUrl}/coafior/${coafiorId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json())
}


export const likeCoafior = (coafiorId, client, token) => {
    return fetch(`${baseUrl}/coafior/${coafiorId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(client)
    }).then(res=>res.json())
};

