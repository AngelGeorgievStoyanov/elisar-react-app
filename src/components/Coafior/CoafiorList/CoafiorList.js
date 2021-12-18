import CoafiorCard from "./CoafiorCard/CoafiorCard"
import './CoafiorList.css';



const CoafiorList = ({
    clientsCoafior
}) => {

    return (
        <>
          
            <section>
                {clientsCoafior.length > 0
                    ? (
                        <ul className="ul-card-list">
                            {clientsCoafior.map(x => <CoafiorCard key={x._id} clientCoafior={x} />)}
                        </ul>
                    )
                    : <p>Welcome!</p>
                }
            </section>
        </>
    )

}
export default CoafiorList
