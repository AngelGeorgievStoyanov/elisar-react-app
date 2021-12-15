import { useState, useEffect, useMemo } from "react";

import * as coafiorService from '../services/coafiorService';


const useCoafiorState=(clientCoafiorId)=>{
    const[clientCoafior, setClientCoafior]=useState({});

    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(()=>{
        coafiorService.getOneCaofior(clientCoafiorId, controller.signal)
        .then(clientCoafiorResult=>{
            setClientCoafior(clientCoafiorResult)
        })
        return()=>{
            controller.abort();

        }
    },[clientCoafiorId,controller])

    return[
        clientCoafior,
        setClientCoafior
    ]

};
export default useCoafiorState;