import { useState, useEffect } from 'react';

import * as coafiorService from '../../services/coafiorService';
import { useAuthContext } from '../contexts/AuthContex';

import CoafiorList from '../Coafior/CoafiorList/CoafiorList';
import { Link } from 'react-router-dom';

import './MyPosts.css'

const MyPosts = () => {

    const [clientsCoafior, setClientsCoafior] = useState([]);
    const { user } = useAuthContext()


    useEffect(() => {
        coafiorService.getMyPosts(user._id)
            .then(clientResult => {
                setClientsCoafior(clientResult)
            })
    }, [])


    return (
        <section className="section-my-posts">
            {clientsCoafior.length > 0
                ? (<>
                    <h1>My posts</h1>
                    <CoafiorList clientsCoafior={clientsCoafior} />
                </>)
                : (
                    <div className="div-no-posts">
                        <h1>Welcome!</h1>
                        <h1 >No posts in your account</h1>
                        <li className="div-no-posts"><Link to="/coafior/create" className="btn-create-post">Create your post</Link></li>
                    </div>)
            }

        </section>
    )
}

export default MyPosts