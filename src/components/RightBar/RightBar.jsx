import './RightBar.scss'

const RightBar = () => {
  return (
    <div className='right-bar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Natali </span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>Stefan </span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <p>
              <span>Natali </span>  changed their cover picture
              </p>
            </div>
              <span>1 min ago</span>

          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
              <p>
              <span>Stefan </span> liked a post
              </p>
            </div>
              <span>10 min ago</span>
            </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
              <p>
              <span>Natali </span> liked a comment
              </p>
            </div>
              <span>15 min ago</span>
            </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              
              <p>
              <span>Stefan </span> posted
              </p>
            </div>
              <span>1 hr ago</span>
            </div>

          </div>
          <div className="item">
            <span>Online Friends</span>
            <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Natali </span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="online" />
              <span>Stefan </span>
            </div>

          </div>
          </div>
        </div>
      </div>

  )
}

export default RightBar