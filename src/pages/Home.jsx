import { BrowserRouter, Link } from 'react-router-dom'
import styles from './Home.module.css'
import homeGif from '../assets/home.gif'
import Sobre from './Sobre'
import Contato from './Contato'

function Home() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <img src={homeGif} alt="" className={styles.gif}/>
      <BrowserRouter>
        <Link to="/sobre">
          <button>Saiba +</button>
        </Link>
        
        <Link to="/sobre">
          <button>Contato</button>
        </Link>
      </BrowserRouter>
    </div>
  )
}

export default Home
