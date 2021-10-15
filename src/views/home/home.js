import axios from "axios";
import React from "react";
import { useEffect } from "react";
import OnlyLoader from "../../components/loader/only.loader";
import SocialCard from "../../components/social-card/social.card";
import "./home.scss"
import Comment from "../../components/comment/card.comment"
import { useDispatch, useSelector } from "react-redux";
import { saveComment } from "../../redux-global/action/addIdComent.action";
import { savePost } from "../../redux-global/action/savePost.action";
import ProfileUser from "../../components/profileUser/profile.user";
import { saveUserInfo } from "../../redux-global/action/getUser.action";

const Home = ()=>{

    const [posts, setPosts] = React.useState('')
    const [value, setValue] = React.useState('')
    const [results , setResults ] = React.useState(10);
    const dispatch = useDispatch()

    const fastStyle ={width:'100%', minHeight:'20vh', display:'flex', justifyContent:'center', alignItems:'center'}

useEffect(()=>{
    const url = `https://dummyapi.io/data/v1/post?limit=${results}`
    const Get = async()=>{
        try {
            const resp = await axios.get(url, {headers:{
                'app-id':'61682885c5ac5b5bc4701902'
            }})
            setPosts(resp.data)
           }
           catch(error) {
               console.log(error);
           }
    }
    Get()

},[results])

const feedPoster = posts?posts.data.map(e=>{
    if(e.tags.join('').includes(value)) {
        return <SocialCard
        img={ e.owner.picture} other={e.image} userId={e.id} id={e.owner.id} name={e.owner.firstName + " " + e.owner.lastName } text={e.text} tags={e.tags} likes={e.likes} 
       key={e.id} />
    }
    else {return false}
}):<div style={fastStyle}><OnlyLoader/></div>

//coments 
    const {commentId, postSaved, userInfo} = useSelector(e=>e);

    const allComments = commentId&& commentId.data.data?
    commentId.data.data.map(e=><Comment
         img={e.owner.picture} name={e.owner.firstName + " " + e.owner.lastName } comment={e.message} key={e.id}/>):
         <div className='not-comments-results'>No hay comentarios para mostrar</div>;

    return <div className='home-app'>
        <div className='feed-posts'>
            <div className='title-sect'>Feed  <label>Filter by tags<input onChange={(e)=>{setValue(e.target.value)}} placeholder='tags' /></label></div>
            <section className='feed-post-continer'>
    {           feedPoster}
        <div className='view-more'>
            <button onClick={()=>{setResults(results+5)}}>View More Posts</button>
        </div>
            </section>
        </div>

        <div className='continer-vw'>
            <div className='title-sect'>
                User Profile
                <button onClick={()=>{ dispatch(saveUserInfo(Object())); dispatch(savePost(Object()))}}>Clear User</button>
            </div>
            <div>
                <div>
                    { userInfo && userInfo.data? <ProfileUser 
                    name={userInfo.data.firstName} img={userInfo.data.picture} email={userInfo.data.email} 
                    registerDate={userInfo.data.registerDate} location={userInfo.data.location.country} />:'Select a post user'}
                  </div>
               {postSaved && postSaved.name ?  <SocialCard
                name={postSaved.name} img={postSaved.img} 
                text={postSaved.text} tags={postSaved.tags} likes={postSaved.likes} postImg={postSaved.other} /> :'Select <View More> for details' }
            </div>
        </div>
        <div className='continer-vw'>
        <div className='title-sect'>
            Comments
            <button onClick={()=>{dispatch(saveComment(String()))}}>Clear Comments</button>
        </div>
        <div className='feed-post-continer'>
           {allComments}
        </div>
        </div>
    </div>
}

export default Home