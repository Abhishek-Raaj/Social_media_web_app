import React from 'react'
import Online from '../online/Online'
import './rightbar.css'
import { Users } from '../../dummyData';
function Rightbar() {
  const HomeRightBar=()=>{
   return(
    <>
    <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b> 3 other friends</b> have birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <hr className='divider'/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user)=>{
            return <Online  key={user.id} user={user}/>
          })}
          
        </ul>
    </>
   )
  }

  const ProfileRightBAr=()=>{
    return(
      <div className="profileRightContainer">
        <div className="profileTop">
          <h3 className="info">User Information</h3>
          <div className='profileinfo'><span className="label">City:</span><p className="label_val">Saran</p></div>
          <div className='profileinfo'><span className="label">From:</span> <p className="label_val">Chhapra</p></div>
          <div className='profileinfo'><span className="label">Relationship:</span><p className="label_val">Single</p></div>
        </div>
        <hr className="divider" />
        <h3>User Friends</h3>
        <div className="profileBottom2">
           {Users.map((user)=>{
            return <div className='userFriendContainer'><img src={user.profilePicture} alt="" className="userFriends" />
            <p className='name'>{user.username}</p>
            </div>
            
           })}
        </div>

      </div>
     
      
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightBAr/>
      </div>
    </div>
  )
}

export default Rightbar