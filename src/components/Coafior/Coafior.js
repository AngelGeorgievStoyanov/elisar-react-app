import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as coafiorService from '../../services/coafiorService';

import CoafiorList from './CoafiorList/CoafiorList';
import './Coafior.css';




export default function Coafior() {

    const [clientsCoafior, setClientCoafior] = useState([]);

    useEffect(() => {
        coafiorService.getAllCoafior()
            .then(result => {
                setClientCoafior(result)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <>
            <section id="coafiorSection">

                <h1 >Coafior Page</h1>
                <p>
                    <h3>

                        Hello, my name is Snezhana Stoyanova and I am a hairdresser with more than 15 years of experience.
                        Welcome to our beauty salon where you can get an expert opinion and a solution
                        to your desires related to your beautiful hair and vision! Welcome!
                    </h3>
                </p>
                <p id="pCoaf">
                    <li id="createCoafiorPost" ><Link to="/coafior/create">Write post on Coafior</Link></li>
                </p>

            </section>
            <section>
                <CoafiorList clientsCoafior={clientsCoafior} />
            </section>
        </>
    )

}