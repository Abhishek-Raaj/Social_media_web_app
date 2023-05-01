import React, { useState } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';

function Post({post}) {
    const user=Users.filter((user)=>{
          return user.id==post.userId
    });
   const [like,setlike]=useState(post.like);
   const [check,setcheck]=useState(true);

 function handler()
 {
    console.log("clicked");
     setcheck(!check); 
     if(check)
     setlike(like+1);
     else
     setlike(like-1);
 }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user[0].profilePicture} className='postProfileImg'/>
                    <span className='postUsername'>{user[0].username}</span>
                    <span className="postDate">{post?.date}</span>
                </div>
                <div className="postTopRight">
                <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                   {post?.desc}
                </span>
                <img src={post.photo} className='postImage'/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" onClick={()=>{handler()}}/>
                    <img src="/assets/heart.png"/>
                    <span className="likeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post