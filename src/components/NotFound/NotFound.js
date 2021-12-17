import './NotFound.css';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../../src/logo.jpg';

export default function NotFound() {

    const img = 'https://www.valera.com/var/ezwebin_site/storage/images/professional/hairdryers/epower/epower-2030-crystal-black-mod.-ep-2030d-rc-cb/119346-12-eng-GB/ePower-2030-Crystal-Black-Mod.-EP-2030D-RC-CB_prodotto_verticale.jpg'
    const navigate = useNavigate()
     useEffect(() => {
         const timer = setTimeout(() => {
         navigate('/');
         }, 10000);
         return () => clearTimeout(timer);
       }, [navigate]);
    return (
        <div id="notfound">
            <img src={logo} className="logo-not-found" />
            <h1 >Page not found...</h1>
            <img src={img} className="hair-dryer" alt="hair dryer" />
            <h2>This page has been blown away by the heat.</h2>
            <p>
                The heat setting of the hair dryer was too high. For better results, turn it down a bit and finish with some cold air.
                Moreover, use a heat resistant product. This way you optimally take care of your hair strands while blow-drying.
            </p>
            <Link to="/" className="btn-not-found">Return to homepage</Link>
        </div>
    )
}