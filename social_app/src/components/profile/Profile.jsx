import React from 'react'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../topbar/Topbar'
import "./profile.css"

function Profile() {
  return (
    <div>
      <Topbar/>
      <div className="profile">
     <Sidebar/>
     <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCoverContainer">
          <img src="/assets/post/3.jpeg" alt="" className="profileCover" />
          <img src="/assets/person/7.jpeg"    alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Abhishek kumar </h4>
            <p className="profileInfoDesc">I am traveller</p>
          </div>
        </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar/>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Profile