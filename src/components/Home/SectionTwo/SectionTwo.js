
import coafior from '../../../foto/IMG_7107.JPG';
import nails from '../../../foto/IMG_7110.JPG';
import { Link } from 'react-router-dom';

import './SectionTwo.css'
function SectionTwo() {

    return (
        <section className="masters" width="100%">
            <article className="coafior">
                <Link to='/coafior'>
                    <img src={coafior} id="coafior" alt="coafior" />
                    <p><h1>TOP COAFIOR SNEZHANA</h1></p>
                </Link>
            </article>
            <article className="nails">
                <Link to='/nails'>
                    <img src={nails} id="nails" alt="nails" />
                <p><h1>TOP NAILS ANTHONINA</h1></p>
                </Link>
            </article>
        </section>
    )
}
export default SectionTwo