import { Link } from "react-router-dom";
import "./style.scss"

export default function PageNotFound () {

    return <div className='not-found-page'>
        We are sory! This page is not exist.
        <Link to='/'>Go Back</Link>
    </div>
}