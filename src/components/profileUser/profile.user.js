import "./profile.user.scss"

const ProfileUser = ({name, email, registerDate, location, img})=>{

    return <div className='userInfo'>
            <div className='profile-pic'>
                <img src={img} alt={name} />
            </div>
            <div className='details-info'>
                <h3>{name}</h3>
                <div className='aditional-info'>
                    <p>Email: {email}</p>
                    <p>Register: {registerDate}</p>
                    <p>Locaton: {location}</p>
                </div>
            </div>
    </div>
}
export default ProfileUser