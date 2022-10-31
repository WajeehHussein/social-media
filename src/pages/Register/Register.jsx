import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Wajeeh Socail</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  dicta tempora, sed minus quo sequi itaque ut corrupti voluptas doloremque assumenda esse rem.</p>
          <span>Do you have an account?</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="text" placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register