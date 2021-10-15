import "./card.comment.scss"

const Comment = ({name, img, comment})=>{

    return <div className='box-comment'>
            <div className='card-header'>
                <span className='profile-picture'>
                    <img src={img} alt={name} />
                </span>
                <h4>{name}</h4>
            </div>
            <div className='comment-text'>
                {comment}
            </div>
    </div>
}

export default Comment