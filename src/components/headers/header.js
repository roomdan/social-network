import { Link } from "react-router-dom"
import "./style.scss"

const Header = ()=>{
    return <div className='header-app'>
        <div className='grid'>
            <div className='logo'>
                <button className='hmg-menu'></button>
                <Link to='/home'>
                        Welcome{' name'}
                </Link>
            </div>
            <div className='info'>
            </div>
        </div>
    </div>
}

export default Header