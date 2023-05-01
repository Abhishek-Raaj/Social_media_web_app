import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Topbar() {
  return (
    <div className='topbarContainer '>
        <div className="topbarLeft">
            <span className="logo">Lamcasocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
              <SearchIcon/>
              <input placeholder='Search for friends or post or video' className='searchInput'/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1
                    </span>
                </div>
                <div className="topbarIconItem">
                    <ChatBubbleIcon/>
                    <span className="topbarIconBadge">1
                    </span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">1
                    </span>
                </div>
            </div>
            <img src='/assets/person/1.jpeg' alt="" className="topbarImg" />
        </div>

    </div>
  )
}

export default Topbar