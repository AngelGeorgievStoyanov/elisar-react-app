import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
               
                setState(response)
            })
    }, [url])

    return state
}

export default useFetch;