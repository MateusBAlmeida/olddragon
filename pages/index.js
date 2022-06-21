import styles from './styles/styles.module.css';
import Helmet from 'react-helmet'




function Page(){

    
    return (
        <div>
            <Helmet title="Home" /> // esse helmet é pra outra coisa, treta do js
            <header className={styles.header}>
                <img className={styles.img} src="\imgs\Logo-Fundo-Claro.png"/>
                <a className={styles.a} href='/login'><button className={styles.button}>Login</button></a>
                <a className={styles.a} href='/cadastro'><button className={styles.button}>Cadastro</button></a>
            </header>
        
                
            <h2 className={styles.h2}>QUE AVENTURAS TE ESPERAM?</h2>
            <footer className={styles.text_body}>Uma plataforma de gestão de fichas para sistema OldDragon. Feito de fãs para fãs.</footer>
        </div>
    )
}

export default Page