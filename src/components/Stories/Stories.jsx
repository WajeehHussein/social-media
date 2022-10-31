import { useContext } from 'react';
import {AuthContext} from '../../context/authContext'
import './Stories.scss';


const Stories = () => {
    const {currentUser} =useContext(AuthContext);

    const storeis = [
    {
        name:"Stefan",
        img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        name:"Natali",
        img: 'https://images.pexels.com/photos/4910234/pexels-photo-4910234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=699.825&fit=crop&h=1133.05'
    },
    {
        name:"Wajeeh",
        img: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        name:"Khaled",
        img: 'https://images.pexels.com/photos/2923157/pexels-photo-2923157.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
]

  return (
    <div className='stories'>
               <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>You</span>
            <button>+</button>
        </div>
        {storeis.map((story,idx) => (
        <div className="story" key={idx}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
    ))}
        </div>
  )
}

export default Stories