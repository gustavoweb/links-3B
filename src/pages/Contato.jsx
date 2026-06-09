import styles from './Contato.module.css'
import contatoGif from '../assets/contato.gif'

function Contato() {
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <img src={contatoGif} alt="" className={styles.gif} />
      <button>Home</button>
      <button>Saiba +</button>
    </div>
  )
}

export default Contato
