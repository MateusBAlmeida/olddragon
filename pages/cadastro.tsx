import { NextPage } from "next"
import Head from "next/head"
import { useForm } from "react-hook-form"
import styles from '../styles/Home.module.css'
import api from "./api/hello"


const Cadastro: NextPage = () => {

    const {register, handleSubmit } = useForm()
    
    async function handleRegister(data){
        const response = await api.post('/user', data)

        
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Cadastro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.centralwidget}>
                <a className={styles.a} href='/'><img className={styles.img} src="/Logo-Fundo-Claro.png"/></a>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <p>
                        <label className={styles.text_field} htmlFor='name'>Nome:<abbr title="required"></abbr></label>
                        <input {...register('name')} className={styles.field} type='text' id='name'/>
                    </p>
                    <p>
                        <label className={styles.text_field} htmlFor='email'>E-mail:<abbr title="required"></abbr></label>
                        <input {...register('email')} className={styles.field} type='email' id='email'/>
                    </p>
                    <p>
                        <label className={styles.text_field} htmlFor='password'>Senha:<abbr title="required"></abbr></label>
                        <input {...register('password')} className={styles.field} type='password' id='password'/>
                    </p>
                    <button className={styles.button_cad}>Cadastrar</button>
                    <a href='/login'>Já tenho uma conta</a>
                </form>
            </div>
        </div>
    )
}

export default Cadastro