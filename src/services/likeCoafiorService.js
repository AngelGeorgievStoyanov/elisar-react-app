import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, clientId)=>request.post(`${baseUrl}/likes`, {userId, clientId});


export const getClientLikes = ( clientId)=>{

    const query = encodeURIComponent(`clientId="${clientId}"`);

    return request.get(`${baseUrl}/likes?select=clientId&where=${query}`)
    .then(res=>res.map(x=>x.userId))
}
