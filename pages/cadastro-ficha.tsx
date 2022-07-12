import { NextPage } from "next";
import Head from "next/head";
import styles from '../styles/Home.module.css'

const CadastroFicha: NextPage = () => {

    function calculaMod(id: String, resultado: String){
        let atributo = parseInt(document.getElementById(id).te);
        let valor = document.getElementById(resultado);

        
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Cadastro de Nova Ficha</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <form>
                    <p>
                        <label className={styles.text_field} >
                            <span className={styles.field_span}>Nome do Personagem</span>
                            <input className={styles.field_form} type='text'></input>
                        </label>
                        <label className={styles.text_field} >
                            <span className={styles.field_span}>Jogador</span>
                            <input className={styles.field_form} type='text'></input>
                        </label>
                    </p>
                    <p>
                        <label className={styles.text_field} htmlFor="race" >
                            <span className={styles.field_span}>Raça</span>
                            <select className={styles.field_form} name="select" id="race">
                                <option value='1'>Anão</option>
                                <option value='2'>Elfo</option>
                                <option value='3'>Halfling</option>
                                <option value='4'>Humano</option>
                            </select>
                        </label>
                        <label className={styles.text_field} htmlFor="class" >
                            <span className={styles.field_span}>Classe</span>
                            <select className={styles.field_form} name="select" id="class">
                                <option value='1'>Clérigo</option>
                                <option value='2'>Homem de Armas</option>
                                <option value='3'>Ladino</option>
                                <option value='4'>Mago</option>
                            </select>
                        </label>
                        <label className={styles.text_field} >
                            <span className={styles.field_span}>Nível</span>
                            <input className={styles.field_form} type='number' min='1' max='20' />
                        </label>
                    </p>
                    <p>
                        <label className={styles.text_field} htmlFor="alignment">
                            <span className={styles.field_span}>Alinhamento</span>
                            <select className={styles.field_form} name="select" id="alignment">
                                <option value='1'>Caótico</option>
                                <option value='2'>Neutro</option>
                                <option value='3'>Ordeiro</option>
                            </select>
                        </label>
                        <label className={styles.text_field} >
                            <span className={styles.field_span}>Caracteristicas</span>
                            <input className={styles.field_form} />
                        </label>
                    </p>
                    <p>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>FOR</span>
                            <input className={styles.field_form} type='number' min='1' max='20' id="forca" />
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Ajuste de Ataque e Dano</span>
                            <input className={styles.field_form} type='number' id="forDano" disabled/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Carga Leve -1 Pesada -2 Máxima</span>
                            <input className={styles.field_form} type='number' id="forCarga" disabled/>
                        </label>
                    </p>
                    <p>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>DES</span>
                            <input className={styles.field_form} type='number' min='1' max='20' id="destreza" />
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Ajustes</span>
                            <input className={styles.field_form} type='number' id="desAjuste" disabled/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Talentos de Ladinos</span>
                            <input className={styles.field_form} type='number' id="desTalentos" disabled/>
                        </label>
                    </p>
                    <p>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>CON</span>
                            <input className={styles.field_form} type='number' min='1' max='20' id="constituicao" />
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Ajuste PV e Proteção</span>
                            <input className={styles.field_form} type='number' id="conAjuste" disabled/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>% Ressurreição</span>
                            <input className={styles.field_form} type='number' id="conRess" disabled/>
                        </label>
                    </p>
                    <p>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>INT</span>
                            <input className={styles.field_form} type='number' min='1' max='20' id="inteligencia" />
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Idiomas</span>
                            <input className={styles.field_form} type='number' id="intIdiomas" disabled/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>% Aprender Magia</span>
                            <input className={styles.field_form} type='number' id="intAprender" disabled/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Magias Adicionais</span>
                            <input className={styles.field_form} type='number' id="intMagiasAd" disabled/>
                        </label>
                    </p>
                    <p>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>SAB</span>
                            <input className={styles.field_form} type='number' min='1' max='20' id="sabedoria"/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Ajuste de Proteção</span>
                            <input className={styles.field_form} type='number' id="sabProtec" disabled/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Magias Adicionais</span>
                            <input className={styles.field_form} type='number' id="sabMagiasAd" disabled/>
                        </label>
                    </p>
                    <p>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>CAR</span>
                            <input className={styles.field_form} type='number' min='1' max='20' id="carisma"/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>N° Seguidores</span>
                            <input className={styles.field_form} type='number' id="carSeguidores" disabled/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Ajuste de Reação</span>
                            <input className={styles.field_form} type='number' id="carReac" disabled/>
                        </label>
                        <label className={styles.text_field}>
                            <span className={styles.field_span}>Mortos-Vivos</span>
                            <input className={styles.field_form} type='number' id="carMortosVivos" disabled/>
                        </label>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default CadastroFicha