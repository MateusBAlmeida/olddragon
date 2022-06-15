import styles from './styles/styles.module.css';


function Page(){
    
    return (
        <div>
        
        <header className={styles.header}>
            <img className={styles.img} src="\imgs\Logo-Fundo-Claro.png"/>
            <button className={styles.button}><a className={styles.a} href='/login'>Login</a></button>
            <button className={styles.button}><a className={styles.a} href='/cadastro'>Cadastro</a></button>

        </header>
      
            
            <h2 className={styles.h2}>Que aventuras te esperam?</h2>
            <p className={styles.h2}>Uma plataforma de gestão de fichas para sistema OldDragon. Feito de fãs para fãs.</p>

            {/* <button className={styles.button}>Login</button>
            <button className={styles.button}>Cadastro</button> */}
        </div>
    )
}

export default Page