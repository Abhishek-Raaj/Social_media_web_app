import React from 'react'

function CloseFriend({user}) {
    console.log(user);
  return (
    <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src={user.profilePicture} alt=""/>
                    <span className="sidebarFriendName">
                          {user.username}
                    </span>
                </li>
  )
}

export default CloseFriend