import styles from './styles/styles.module.css';
import Helmet from 'react-helmet'


function Page(){

    async function login(){
        
    }
    
    
    return (
        <div className={styles.container}>
            <Helmet title="Login" />
            <div className={styles.centralwidget}>     
            <a className={styles.a} href='/'><img className={styles.img} src="\imgs\Logo-Fundo-Claro.png"/></a>
            <form>
                <p>
                    <label className={styles.text_field} for='email'>E-mail:</label>
                    <input className={styles.field} type='email' id='email'/>
                </p>
                <p>
                    <label className={styles.text_field} for='password'>Senha:</label>
                    <input className={styles.field} type='password' id='password'/>
                </p>
                <button className={styles.button_cad}>Logar</button>
            </form>
            </div>
        </div>
    )
}

export default Page