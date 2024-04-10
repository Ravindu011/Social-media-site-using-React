import React from 'react'
import "./leftPane.css"
import InboxIcon from '@mui/icons-material/Inbox';
import Groups2Icon from '@mui/icons-material/Groups2';
import FeedIcon from '@mui/icons-material/Feed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';

export default function LeftPane() {
  return (
        <div className="leftPaneBox">
            <div className="leftPaneContainer">
                <div className="leftPaneMenu">
                    <li className="leftPaneMenuItem">
                        <InboxIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Messages</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <Groups2Icon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Groups</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <FeedIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Feed</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <FlagIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Pages</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <CalendarMonthIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Events</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <SettingsApplicationsIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Settings</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <SportsEsportsIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Games</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <NewspaperIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">News</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <WorkIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Jobs</span>
                    </li>
                    <li className="leftPaneMenuItem">
                        <StoreIcon className='leftPaneMenuIcon'/>
                        <span className="leftPaneMenuText">Market</span>
                    </li>
                    <hr/>
                    <div className="pagesYouLiked">
                        <h3>Pages you liked</h3>
                        <div className="pageList">
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                            <li className="pageListItem">
                                <img src="/images/1.jpg" alt="" className="pagePic" />
                                <span className="pageName">Zorro</span>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}
