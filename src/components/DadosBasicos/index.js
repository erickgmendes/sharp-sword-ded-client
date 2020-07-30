import React from "react"

import Image from '../../images/dados-basicos.png'

const styles = {
    container: {
        height: 219,
        width: 1177,
        textAlign: 'center',
        backgroundImage: `url(${Image})`,
        marginBottom: '4px'
    },      
    label: {
        width: '100px',
        height: '100px',
        position: 'absolute',
        top: '55px',
        left: '72px',
        marginTop: '-50px',
        marginLeft: '-50px',
        fontWeight: 'bold',
        fontSize: '12px',
    },  
    inputNomePersonagem: {
        width: '350px',
        height: '36px',        
        top: '100px',
        left: '60px',
        textAlign: 'center',
        fontSize: '25px',
        border: 'none',
        fontWeight: 'bold',
        position: 'absolute',
    },
    inputs: {
        position: 'absolute',
        height: '24px',
        fontSize: '16px',
        border: 'none',
    },
    inputsCima: {
        top: '81px',
    },
    inputsBaixo: {
        top: '135px',
    },
    inputClasse: {
        left: '517px',
        width: '185px',
    },
    inputNivel: {
        left: '702px',
        width: '45px',
    },
    inputAntecedente: {
        left: '751px',
        width: '200px',
    },
    inputNomeJogador: {
        left: '954px',
        width: '194px',
    },
    inputRaca: {        
        left: '517px',
        width: '185px',
    },
    inputTendencia: {
        left: '751px',
        width: '200px',
    },
    inputXp: {
        left: '954px',
        width: '194px',
    },
};

const DadosBasicos = props =>
    <div style={styles.container}>
        <input
            style={{
                ...styles.inputs, 
                ...styles.inputNomePersonagem
            }}
            type="text"
            defaultValue={props.nomePersonagem}
        />
        <input
            style={{
                ...styles.inputs, 
                ...styles.inputsCima, 
                ...styles.inputClasse
            }}
            type="text"
            value={props.classe}
        />
        <input        
            style={{
                ...styles.inputs, 
                ...styles.inputsCima, 
                ...styles.inputNivel            
            }}
            type="text"
            value={props.nivel}
        />
        <input
            style={{
                ...styles.inputs, 
                ...styles.inputsCima, 
                ...styles.inputAntecedente
            }}
            type="text"
            value={props.antecedente}
        />
        <input
            style={{
                ...styles.inputs, 
                ...styles.inputsCima, 
                ...styles.inputNomeJogador
            }}
            type="text"
            value={props.nomeJogador}
        />
        <input
            style={{
                ...styles.inputs, 
                ...styles.inputsBaixo, 
                ...styles.inputRaca
            }}
            type="text"
            value={props.raca}
            readOnly
        />
        <input
            style={{
                ...styles.inputs, 
                ...styles.inputsBaixo, 
                ...styles.inputTendencia
            }}
            type="text"
            value={props.tendencia}
            readOnly
        />
        <input
            style={{
                ...styles.inputs, 
                ...styles.inputsBaixo, 
                ...styles.inputXp
            }}
            type="text"
            value={props.xp}
            readOnly
        />
    </div>

export default DadosBasicos