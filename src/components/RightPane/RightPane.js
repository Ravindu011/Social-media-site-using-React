import React from 'react'
import "./rightPane.css"


export default function RightPane() {
  return (
        <div className="rightPaneBox">
          <div className="rightPaneContainer">
            <div className="adContainer">
              <span className="sponsor">Sponsored</span>
              <img src="/images/ad1.jpg" alt="" className="adImage" />
              <span className="addText">Make your ride faster. </span>
            </div>
            <div className="birthdayContainer">
              <img src="/images/bd.png" alt="" className="birthdayImages" />
              <span className="birthdayText"><b>Tharani Jayathilake</b> and <b>2 others</b> having birthday today.</span>
            </div>
            <div className="friendList">
              <li className="onlineFriends">
                <div className="onlineFriendImgContainer">
                  <img src="/images/f1.jpg" alt="" className="onlineFriendImg" />
                  <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Supun Chathuranga</span>
              </li>
              <li className="onlineFriends">
                <div className="onlineFriendImgContainer">
                  <img src="/images/f1.jpg" alt="" className="onlineFriendImg" />
                  <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Supun Chathuranga</span>
              </li>
              <li className="onlineFriends">
                <div className="onlineFriendImgContainer">
                  <img src="/images/f1.jpg" alt="" className="onlineFriendImg" />
                  <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Supun Chathuranga</span>
              </li>
              <li className="onlineFriends">
                <div className="onlineFriendImgContainer">
                  <img src="/images/f1.jpg" alt="" className="onlineFriendImg" />
                  <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Supun Chathuranga</span>
              </li>
              <li className="onlineFriends">
                <div className="onlineFriendImgContainer">
                  <img src="/images/f1.jpg" alt="" className="onlineFriendImg" />
                  <span className="onlineStatus"></span>
                </div>
                <span className="onlineFriendName">Supun Chathuranga</span>
              </li>
            </div>
          </div>
        </div>
  )
}
