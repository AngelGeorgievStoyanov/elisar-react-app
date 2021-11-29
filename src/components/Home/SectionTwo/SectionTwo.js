
import coafior from '../../../foto/IMG_7107.JPG'
import nails from '../../../foto/IMG_7110.JPG'


function SectionTwo() {

    return (
        <section className="masters" width="100%">
            <article className="coafior">
                <img src={coafior} id="coafior" />
                <p><h1>TOP COAFIOR SNEZHANA</h1></p>
            </article>
            <article className="nails">
                <img src={nails} id="nails" />
                <p><h1>TOP NAILS ANTHONINA</h1></p>
            </article>
        </section>
    )
}
export default SectionTwo