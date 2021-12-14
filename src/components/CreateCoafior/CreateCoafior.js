import { useAuthContext } from "../contexts/AuthContex"
import { useNavigate } from "react-router-dom";

import * as coafiorService from '../../services/coafiorService';


const CreateCoafior = () => {

    const { user } = useAuthContext();
    const navigate = useNavigate();


    const onCoafiorCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        coafiorService.createCoafior({
            name,
            description,
            imageUrl,
        }, user.accessToken)
        .then(result=>{
            navigate('/coafior')
        })


    }


    return (
        <section>
            <form id="create-form-coafior-post" onSubmit={onCoafiorCreate} method="POST" >
                <h2>Create post on Coafior Page</h2>
                <label htmlFor="name">Name</label>
                <span>
                    <input type="text" name="name" placeholder="Place enter your name" />
                </span>
                <label htmlFor="description" >Post</label>
                <span>
                    <textarea name="description" placeholder="Place write your post" />
                </span>
                <label htmlFor="image" >Image</label>
                <span>
                    <input type="text" name="imageUrl" placeholder="Image" />
                </span>
                <input type="submit" value="Add post" />
            </form>

        </section>
    )

}

export default CreateCoafior