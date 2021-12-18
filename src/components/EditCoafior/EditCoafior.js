
import { useParams, useNavigate } from "react-router-dom";

import * as coafiorService from '../../services/coafiorService'


import useCoafiorState from "../../hooks/useClientCoafiorState";

import './EditCoafior.css'


const EditCoafior = () => {

    const { clientCoafiorId } = useParams();
    const [clientCoafior, setClientCoafior] = useCoafiorState(clientCoafiorId);
    const navigate = useNavigate()
    
    
    const clientCoafiorSubmitHandler = (e) => {
        e.preventDefault();

        let coafiorData = Object.fromEntries(new FormData(e.currentTarget))
       console.log(coafiorData)
       
       
        coafiorService.updateCoafior(clientCoafior._id, coafiorData)
        navigate('/coafior')
    }

    return (
        <section className="section-edit">
            <form id="edit-form-coafior-post" onSubmit={clientCoafiorSubmitHandler} method="POST" >
                <h2>Edit post on Coafior Page</h2>
                <label htmlFor="name">Name</label>
                <span>
                    <input type="text" name="name" defaultValue={clientCoafior.name} />
                </span>
                <label htmlFor="description" >Post</label>
                <span>
                    <textarea name="description" defaultValue={clientCoafior.description} />
                </span>
                <label htmlFor="image" >Image</label>
                <span>
                    <input type="text" name="imageUrl" defaultValue={clientCoafior.imageUrl} />
                </span>
                <input type="submit" value="Save post" />
            </form>

        </section>

    )

}
export default EditCoafior;