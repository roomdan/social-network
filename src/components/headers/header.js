import { Link } from "react-router-dom"
import "./style.scss"
import "./menu.scss"
import {  useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import { GoogleGetUserData } from "../../redux-global/action/Google.action"


const Header = ()=>{

    const [menu, setMenu] = useState('-20rem')
    const [view, setView] = useState(false);

    const {GoogleUser}= useSelector(e=>e);
    const dispatch = useDispatch()

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
    <div style={{right:menu}} className='menu-inter'>
        <div className='user'>
            <div className='title'>Acount Details</div>
            <div className='profile-picture'>
                <img src={ 
                    GoogleUser && GoogleUser.additionalUserInfo.profile? 
                    GoogleUser.additionalUserInfo.profile.picture:''} 
                    alt={ GoogleUser && GoogleUser.additionalUserInfo.profile? GoogleUser.additionalUserInfo.profile.name:''}/>
            </div>
            <h3>{GoogleUser && GoogleUser.additionalUserInfo.profile? GoogleUser.additionalUserInfo.profile.name:''}</h3>
            <input readOnly value={GoogleUser && GoogleUser.additionalUserInfo.profile? GoogleUser.additionalUserInfo.profile.email:''}/>
            <div className='email-verified'>
                <div className='icon'></div>
                <div className='text'>
                    {GoogleUser && GoogleUser.additionalUserInfo.profile? GoogleUser.additionalUserInfo.profile.verified_email===true?'Email Verified':'Email Not Verified':''}
                </div>
            </div>
            <button onClick={()=>{dispatch(GoogleGetUserData({credential:{accessToken:''}}))}} className='logOutBtn'>Log out</button>
        </div>
    </div>
    </>
}

export default Header