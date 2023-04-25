import { useNavigate, useParams, Link } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContex";

import useCoafiorState from "../../hooks/useClientCoafiorState";

import * as coafiorService from '../../services/coafiorService';

import * as likeService from '../../services/likeCoafiorService';

import './DetailsCoafior.css'
import { useEffect } from "react";
const DetailsCoafior = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { clientCoafiorId } = useParams();

    const [clientCoafior, setClientCoafior] = useCoafiorState(clientCoafiorId)

    useEffect(() => {
        likeService.getClientLikes(clientCoafiorId)
            .then(likes => {

                console.log(likes)
                setClientCoafior(state => ({ ...state, likes }))
            })
    }, [])

    const deleteClickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        coafiorService.destroyCoafior(clientCoafiorId, user.accessToken)
            .then(() => {
                console.log('delete---->')
                navigate('/coafior')
            })
    }

    const ownerButtons = (
        <>

            <Link className="button" to={`/coafior/edit/${clientCoafior._id}`}>Edit</Link>
            <a className="button" onClick={deleteClickHandler} >Delete</a>

        </>
    )



    const likeButtonClick = () => {
        if (user._id == clientCoafior._ownerId) {
            return;
        }
        if (clientCoafior.likes.includes(user._id)) {
            console.log('You connot like again.')
        }


        likeService.like(user._id, clientCoafiorId)
            .then(() => {
                setClientCoafior(state => ({ ...state, likes: [...state.likes, user._id] }));

                console.log('Successfuly liked')
            })
    }


    const userButton = (
        <>
            <button className="likebtn" onClick={likeButtonClick} disabled={clientCoafior.likes?.includes(user._id)}  >Like</button>
        </>
    )

    return (
        <section className="section-details">
            <form id="details-form-coafior-post"   >
                <h1 className="details-text">Details Page</h1>
                <h3 className="details-text">Name: {clientCoafior.name}</h3>
                <p><img className="image-coafior-card" src={clientCoafior.imageUrl} alt='IMG' /></p>
                <p className="details-text">Post: {clientCoafior.description}</p>
                <div className="action-buttons">
                    <div className="detail-buttons">
                        {user._id && (user._id == clientCoafior._ownerId
                            ? ownerButtons
                            : userButton
                        )}
                    </div>
                    <span className="span-likes" >Likes: {clientCoafior.likes?.length || 0}</span>
                </div>
            </form>

        </section>
    )

}
export default DetailsCoafior;