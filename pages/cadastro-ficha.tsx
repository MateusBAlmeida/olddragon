import { NextPage } from "next";
import Head from "next/head";
import styles from '../styles/Home.module.css'

const CadastroFicha: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cadastro de Nova Ficha</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <form>
                    <label className={styles.text_field} >Nome do Perosnagem</label>
                    <input type='text'></input>
                    <label className={styles.text_field} >Jogador</label>
                    <input type='text'></input>
                    <label className={styles.text_field} >Raça</label>
                    <input></input>
                    <label className={styles.text_field} >Classe</label>
                    <input></input>
                    <label className={styles.text_field} >Nível</label>
                    <input></input>
                    <label className={styles.text_field} >Alinhamento</label>
                    <input></input>
                    <label className={styles.text_field} >Caracteristicas</label>
                    <input></input>
                    <label className={styles.text_field} >Força</label>
                    <input></input>
                    <label className={styles.text_field} >Destreza</label>
                    <input></input>
                    <label className={styles.text_field} >Constituição</label>
                    <input></input>
                    <label className={styles.text_field} >Inteligência</label>
                    <input></input>
                    
                </form>
            </div>
        </div>
    )
}

export default CadastroFicha