import { useDispatch } from "react-redux"
import { getComments } from "../../redux-global/action/addIdComent.action"
import { getFullUserInfo } from "../../redux-global/action/getUser.action"
import { savePost } from "../../redux-global/action/savePost.action"
import "./social.card.scss"

const SocialCard = ({img, name, text, tags, likes, userId, id, other , postImg})=>{

    const dataPost = {
        img, name, text, tags, likes, userId, other
    }
    const dispatch = useDispatch()
    const viewComments = ()=>{
        dispatch(getComments(userId));
        dispatch(savePost(dataPost));
        dispatch(getFullUserInfo(id))
    }

    return (
        <div className='simple-post-card'>
            <div className='card-header'>
                <span className='profile-picture'>
                    <img src={img} alt={name} />
                </span>
                <h4>{name}</h4>
            </div>
            <div className='content-posters'>
                <div className='post'>
                    <div className='post-text'>
                        <p>{text}</p>
                        { postImg &&
                      <div className='post-image-reaction'><img src={postImg} alt={name}></img></div>}
                    </div>
                    <div className='post-reactions'>
                        {likes}
                        <button>likes</button>
                        <button onClick={viewComments} id='comment-btn'>View More</button>
                    </div>
                </div>
                <div className='tags'>
                    <p>Tags:</p> {tags.join('-')}
                </div>
            </div>
        </div>
    )
}

export default SocialCard