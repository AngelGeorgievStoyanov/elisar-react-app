
export const login = async (email, password) => {
    let res = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const logout = (token)=>{
    return fetch('http://localhost:3030/users/logout',{
        headers:{
            'X-Authorization':token
        }
    })
}


export const getUser = ()=>{
    let username = localStorage.getItem('username')
    return username
}