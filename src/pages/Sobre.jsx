import styles from './Sobre.module.css'
import sobreGif from '../assets/sobre.gif'

function Sobre() {
  return (
    <div className={styles.sobre}>
      <h1>Sobre</h1>
      <img src={sobreGif} alt="" />
    </div>
  )
}

export default Sobre
