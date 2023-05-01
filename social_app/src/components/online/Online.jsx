import React from 'react'

import './online.css'

function Online({user}) {
    console.log(user);
  return (
    <li className="rightbarFriend">
             <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarProfileImageBatch">.</span>
              <span className="profileUserName">{user.username}</span>
             </div>
          </li>
  )
}

export default Online;