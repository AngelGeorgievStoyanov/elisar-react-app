import useFetch from "../../../hooks/useFetch";



function SectionThree() {

    const result = useFetch('http://localhost:3030/jsonstore/posts')
    const list = Object.values(result)
    return (
        <ul>
            {list.map(x => <li key={x.post}>{x.post}</li>)}
        </ul>
    );

}
export default SectionThree