import styles from './styles/styles.module.css';
import Helmet from 'react-helmet'


export default function Page(){

    
    
    return (
        <div className={styles.container}>
            <Helmet title="Cadastro" />
            <div className={styles.centralwidget}>
                <a className={styles.a} href='/'><img className={styles.img} src="\imgs\Logo-Fundo-Claro.png"/></a>
                <form>
                    <p>
                        <label className={styles.text_field} for='name'>Nome:<abbr title="required"></abbr></label>
                        <input className={styles.field} type='text' id='name'/>
                    </p>
                    <p>
                        <label className={styles.text_field} for='email'>E-mail:<abbr title="required"></abbr></label>
                        <input className={styles.field} type='email' id='email'/>
                    </p>
                    <p>
                        <label className={styles.text_field} for='password'>Senha:<abbr title="required"></abbr></label>
                        <input className={styles.field} type='password' id='password'/>
                    </p>
                    <button className={styles.button_cad}>Cadastrar</button>
                    <a href='/login'>Já tenho uma conta</a>
                </form>
            </div>
        </div>
    )
}

