import styles from './styles/styles.module.css';


function Page(){
    
    return (
        <div className={styles.container}>
            <div className={styles.centralwidget}>     
            <img className={styles.img} src="\imgs\Logo-Fundo-Claro.png"/>
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