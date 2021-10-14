import { Link } from "react-router-dom"
import "./style.scss"
import "./menu.scss"
import { useState } from "react"

const Header = ()=>{

    const [menu, setMenu] = useState('-20rem')
    const [view, setView] = useState(false);

    function menue () {
        if(!view) {
            setMenu('0')
            setView(true);
        }
        else {
            setMenu('-20rem')
            setView(false)
        }
    }
    
    return <> <div className='header-app'>
        <div className='grid'>
            <div className='logo'>
                <button onClick={()=>{menue()}} className='hmg-menu'></button>
                <Link to='/home'>
                        Welcome{' name'}
                </Link>
            </div>
            <div className='info'>
            </div>
        </div>
    </div>
    <div style={{right:menu}} className='menu-inter'></div>
    </>
}

export default Header