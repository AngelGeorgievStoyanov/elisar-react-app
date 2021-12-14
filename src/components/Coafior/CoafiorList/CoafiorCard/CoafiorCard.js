import { Link } from "react-router-dom"

const CoafiorCard = ({
    clientsCoafior
})=>{

    return(

        <li>
            <h2>{clientsCoafior.name}</h2>
            <p>{clientsCoafior.description}</p>
            <p>
                <img src={clientsCoafior.imageUrl} />
            </p>
            <Link className="button" to={`coafior/details/${clientsCoafior._id}`}>DETAILS</Link>
        </li>
    )


}

export default CoafiorCard;