import { Link } from "react-router-dom"
import './CoafiorCard.css'

const CoafiorCard = ({
    clientCoafior
})=>{

    return(

        <li>
            <h2>{clientCoafior.name}</h2>
            <p>{clientCoafior.description}</p>
            <p>
                <img src={clientCoafior.imageUrl} />
            </p>
            <Link className="button button-details" to={`coafior/details/${clientCoafior._id}`}>DETAILS</Link>
        </li>
    )


}

export default CoafiorCard;