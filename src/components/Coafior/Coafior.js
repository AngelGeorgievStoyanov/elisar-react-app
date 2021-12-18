import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as coafiorService from '../../services/coafiorService';
import { useAuthContext } from '../contexts/AuthContex';

import CoafiorList from './CoafiorList/CoafiorList';
import './Coafior.css';




export default function Coafior() {

    const { user } = useAuthContext()
    const [clientsCoafior, setClientCoafior] = useState([]);
    const userButton = <li id="createCoafiorPost" ><Link to="/coafior/create">Write post on Coafior</Link></li>
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
        <article className="coafior-article">
            <section id="coafiorSection">

                <h1 className="coafior-info" >About Snezhana</h1>
                <p className="coafior-info">                   
                        Hello, my name is Snezhana Stoyanova and I am a hairdresser with more than 15 years of experience.
                        Welcome to our beauty salon where you can get an expert opinion and a solution
                        to your desires related to your beautiful hair and vision! Welcome!                    
                </p>
                <p id="pCoaf">
                    {user._id
                        ? userButton
                        : ''
                    }

                </p>

            </section>
            <section className="section-coafior-all">
                <CoafiorList clientsCoafior={clientsCoafior} />
            </section>
        </article>
    )

}