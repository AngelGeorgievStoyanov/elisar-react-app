import { useNavigate, useParams, Link } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContex";

import useCoafiorState from "../../hooks/useClientCoafiorState";

import * as coafiorService from '../../services/coafiorService';

import './DetailsCoafior.css'
const DetailsCoafior = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { clientCoafiorId } = useParams();

    const [clientCoafior, setClientCoafior] = useCoafiorState(clientCoafiorId)

    

    const deleteClickHandler = (e)=>{
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        coafiorService.destroyCoafior(clientCoafiorId, user.accessToken)
        .then(()=>{
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

    const userButton = (
        <>
        <h1>No buttons</h1>
        </>
    )




    return (
        <section>
            <form id="details-form-coafior-post"   >
                <h1>Details Page</h1>
                <h3>Name: {clientCoafior.name}</h3>
                <p><img src={clientCoafior.imageUrl} /></p>
                <p>Post: {clientCoafior.description}</p>
                <div className="detail-buttons">
                    {user._id && (user._id == clientCoafior._ownerId
                        ? ownerButtons
                        : userButton
                    )}
                </div>
            </form>

        </section>
    )

}
export default DetailsCoafior;