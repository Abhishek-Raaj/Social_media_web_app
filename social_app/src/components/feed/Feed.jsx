import React from 'react'
import { Posts } from '../../dummyData'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((post)=>{
          console.log(post);
          return <Post key={post.id} post={post}/>
            
        })}
      </div>
    </div>
  )
}

export default Feed