import './Main.css';
import coafior from '../../foto/IMG_7107.JPG'
import nails from '../../foto/IMG_7110.JPG'
export default function Main() {

    let image = [
        'https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/3220748fc8cd5209b92f6f4e/pexelsphoto458530.png',
        
    ]

    return (
        <main>
            <section>
                <img src={image[0]} width="100%" />
            </section>
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
            <section></section>
            <section></section>
            <section></section>
        </main>



    )
}