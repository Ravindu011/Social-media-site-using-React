import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="Post">
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/2.jpg" alt="" className="postImg" />
                <span className="postUname">Ravindu C Rathnayake</span>
                <span className="postTime">5 mins ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    Hello i'm Spider Man 
                </div>
                <img src="/images/2.jpg" alt="" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/L.png" alt="" className="reactionPic" />
                    <img src="/images/H.png" alt="" className="reactionPic" />
                    <img src="/images/M.png" alt="" className="reactionPic" />
                    <img src="/images/HH.png" alt="" className="reactionPic" />
                    <span className="likeCount">SuperMan and 67 other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">27 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
