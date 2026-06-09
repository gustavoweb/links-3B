import styles from './Home.module.css'
import homeGif from '../assets/home.gif'

function Home() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <img src={homeGif} alt="" />
      <button>Saiba +</button>
      <button>Contato</button>
    </div>
  )
}

export default Home
