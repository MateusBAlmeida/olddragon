import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import styles from '../styles/Home.module.css'
import api from './api/api'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'


const Login: NextPage = () => {

    const {register, handleSubmit } = useForm()
    const {signIn} = useContext(AuthContext)
    
    async function handleSignIn(data){
        await signIn(data)
    }
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.centralwidget}>     
            <a className={styles.a} href='/'><img className={styles.img} src="/Logo-Fundo-Claro.png"/></a>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <p>
                    <label className={styles.text_field} htmlFor='email'>E-mail:</label>
                    <input {...register('email')} className={styles.field} type='email' id='email'/>
                </p>
                <p>
                    <label className={styles.text_field} htmlFor='password'>Senha:</label>
                    <input {...register('password')} className={styles.field} type='password' id='password'/>
                </p>
                <button className={styles.button_cad}>Logar</button>
                <a href='/cadastro'>Não tenho uma conta</a>
            </form>
            </div>
        </div>
    )
}

export default Login