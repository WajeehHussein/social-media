import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './Comments.scss'

const Comments = () => {

    const {currentUser} = useContext(AuthContext);
    const comments = [
        {
          name: 'Wajeeh',
          userId: 1,
          profilePic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',         
        },
        {
          name: 'Natali',
          userId: 1,
          profilePic:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          name: 'Stefan',
          userId: 1,
          profilePic:"https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
      ]
  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='write a comment' />
            <button>Send</button>
        </div>
        {comments.map((comment,idx) => (
            <div className="comment" key={idx}>
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments;