import CoafiorCard from "./CoafiorCard/CoafiorCard"

const CoafiorList = ({
    clientsCoafior
}) => {

    return (
        <>
          
            <section>
                {clientsCoafior.length > 0
                    ? (
                        <ul>
                            {clientsCoafior.map(x => <CoafiorCard key={x._id} client={x} />)}
                        </ul>
                    )
                    : <p>Welcome!</p>
                }
            </section>
        </>
    )

}
export default CoafiorList
