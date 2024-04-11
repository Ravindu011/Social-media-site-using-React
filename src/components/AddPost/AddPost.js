import React from 'react'
import "./addPost.css"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='AddPost'>
      <div className="addPostContainer">
        <div className="addPostTop">
            <img src="/images/1.jpg" alt="" className="addPostPic" />
            <input placeholder="Whats in your mind..?" type="text" className="addPostinput" />
        </div>
        <hr className='postHr'/>
        <div className="addPostBottom">
            <div className="addPostOptions">
                <div className="addPostOption">
                    <AddPhotoAlternateIcon htmlColor='orange' className='addPhoto'/>
                    <span className="addPostoptiontext">Add photo/Video</span>
                </div>
                <div className="addPostOption">
                    <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
                    <span className="addPostoptiontext">Add Location</span>
                </div>
                <div className="addPostOption">
                    <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                    <span className="addPostoptiontext">Tag</span>
                </div>
                <div className="addPostOption">
                    <LiveTvIcon htmlColor='red' className='addPhoto'/>
                    <span className="addPostoptiontext">Live</span>
                </div>
            </div>
            <button className="postButton">Post</button>
        </div>
      </div>
    </div>
  )
}
