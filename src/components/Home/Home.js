import './Home.css';
import SectionOne from './SectionOne/Section';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import useFetch from '../../hooks/useFetch';

export default function Home() {



    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree/>
            <section></section>
            <section></section>
            <section></section>
        </div>



    )
}