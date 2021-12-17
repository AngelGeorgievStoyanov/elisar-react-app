
import { Link } from 'react-router-dom';

import './SectionTwo.css';
const coafior = 'https://disk.bg/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=505&a=true&file=IMG_8449.jpg&t=Lx2q9pmrKVjjWAD&scalingup=0'
const nails = 'https://disk.bg/index.php/apps/files_sharing/ajax/publicpreview.php?x=1920&y=505&a=true&file=IMG_8448.JPG&t=s2omgc0cN5MXwgq&scalingup=0'
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
                    <p className="name-manicurist">
                        <h1>TOP MANICURIST</h1>
                        <h1> ANTHONINA</h1>
                    </p>
                </Link>
            </article>
        </section>
    )
}
export default SectionTwo