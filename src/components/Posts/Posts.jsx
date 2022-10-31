import {Post} from '../../components';
import './Posts.scss';

const Posts = () => {
  const posts = [
    {
      name: 'Wajeeh',
      userId: 1,
      profilePic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img:"https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: 'Natali',
      userId: 1,
      profilePic:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img:"https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: 'Stefan',
      userId: 1,
      profilePic:"https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img:"https://images.pexels.com/photos/670625/pexels-photo-670625.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ]
  return (
    <div className='posts'>
      {posts.map((post,idx) => (
          <Post post={post} key={idx}/>
      ))}
    </div>
  )
}

export default Posts