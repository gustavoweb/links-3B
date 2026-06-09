import styles from './Contato.module.css'
import contatoGif from '../assets/contato.gif'

function Contato() {
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <img src={contatoGif} alt="" />
    </div>
  )
}

export default Contato
