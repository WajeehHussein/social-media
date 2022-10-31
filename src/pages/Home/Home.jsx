import './Home.scss'
import { Stories,Posts,Share } from '../../components'

const Home = () => {
  return (
    <div className='home'>
    <Stories />
    <Share />
    <Posts />
    </div>
  )
}

export default Home