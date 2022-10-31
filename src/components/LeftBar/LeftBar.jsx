import './LeftBar.scss'
import friends from '../../assets/friends.png'
import groups from '../../assets/groups.png'
import market from '../../assets/market.png'
import watch from '../../assets/watch.png'
import memories from '../../assets/memories.png'
import Events from '../../assets/Events.png'
import Gaming from '../../assets/Gaming.png'
import Gallery from '../../assets/Gallery.png'
import Videos from '../../assets/Videos.png'
import Messages from '../../assets/Messages.png'
import Fundraiser from '../../assets/Fundraiser.png'
import Tutorials from '../../assets/Tutorials.png'
import Courses from '../../assets/Courses.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'


const LeftBar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='left-bar'>
      <div className="container">
        <div className="menu">
          <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
        <div className="item">
            <img src={Fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar