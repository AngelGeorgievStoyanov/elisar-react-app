import { Link } from "react-router-dom";
import './CoafiorCard.css'

const CoafiorCard = ({
    clientCoafior
})=>{

    return(

        <li className="coafior-card" >
            <h2>{clientCoafior.name}</h2>
            <p>{clientCoafior.description}</p>
            <p>
                <img className="image-coafior-card" src={clientCoafior.imageUrl} alt='IMG' />
            </p>
            <Link className="button button-details" to={`/coafior/details/${clientCoafior._id}`}>DETAILS</Link>
        </li>
    )


}

export default CoafiorCard;