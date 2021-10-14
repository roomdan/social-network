import { useSelector } from "react-redux"
import "./home.scss"

const Home = ()=>{

    const data = useSelector(e=>e);
    console.log(data);

    return <div className='home-app'>

    </div>
}

export default Home