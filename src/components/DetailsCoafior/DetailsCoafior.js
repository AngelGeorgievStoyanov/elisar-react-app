import { useNavigate,useParams ,Link } from "react-route-dom";

import { useAuthContext } from "../contexts/AuthContex";

const DetailsCoafior = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const {clientCoafiorId}=useParams();
    return (
        <section>
            <form id="details-form-coafior-post"   >
               <h1>Details Page</h1>
            </form>

        </section>
    )

}
export default DetailsCoafior;