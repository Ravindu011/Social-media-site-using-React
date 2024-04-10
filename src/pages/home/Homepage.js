import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import RightPane from '../../components/RightPane/RightPane'
import "./home.css"

export default function Homepage() {
  return (
    <>
        <Navbar/>
        <div className="bottomContainer">
          <LeftPane/>
          <PostPane/>
          <RightPane/>
        </div>
    </>
  )
}
