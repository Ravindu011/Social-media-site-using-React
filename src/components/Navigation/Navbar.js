import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='navBarBox'>
        <div className="navBarLeft">
            <span className="logo">Z-Universe</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search' className="searchInput" />
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLinks">HomePage</span>
                <span className="navBarLinks">Profile</span>
            </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonIcon/>
                    <div className="iconTag">3</div>
                </div>
                <div className="navBarIcon">
                    <ChatBubbleIcon/>
                    <span className="iconTag">5</span>
                </div>
                <div className="navBarIcon">
                    <SettingsSuggestIcon/>
                    <span className="iconTag">2</span>
                </div>
                <div className="profilePic">
                    <img src="/images/1.jpg" alt="" className="prPic" />
                </div>
            </div>
        </div>
    </div>
  )
}
