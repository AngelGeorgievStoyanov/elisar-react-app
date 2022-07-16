import { useState, useEffect, useContext } from 'react';
import * as authService from '../../services/authService'
import { AuthContext } from "../contexts/AuthContex";

import './Profile.css'
const Profile = () => {
    //const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState([]);


    useEffect(() => {
        authService.profile(user.accessToken)
            .then(profile => {

                setProfile(profile)
                console.log(user)
            })

    }, [])

    return (
        <section id='profile-section'>
            <h1>USER INFO</h1>
            <h1>User name :{user.username}</h1>
            <h1>User email: {user.email}</h1>
            <h1>User password:{user.password}</h1>
           
            
        </section>
    )

}

export default Profile