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
    inputNomePersonagem: {
        width: '350px',
        height: '36px',
        position: 'absolute',
        top: '100px',
        left: '60px',
        textAlign: 'center',
        fontSize: '25px',
        border: 'none',
        fontWeight: 'bold'
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
    inputClasse: {
        height: '24px',
        position: 'absolute',
        fontSize: '16px',
        top: '81px',
        left: '517px',
        width: '185px',
        border: 'none',
    },
    inputNivel: {
        height: '24px',
        position: 'absolute',
        fontSize: '16px',
        top: '81px',
        left: '702px',
        width: '45px',
        //textAlign: 'right',
        border: 'none',
    },
    inputAntecedente: {
        height: '24px',
        position: 'absolute',
        fontSize: '16px',
        top: '81px',
        left: '751px',
        width: '200px',
        border: 'none',
    },
    inputNomeJogador: {
        height: '24px',
        position: 'absolute',
        fontSize: '16px',
        top: '81px',
        left: '954px',
        width: '194px',
        border: 'none',
    },
    inputRaca: {
        height: '24px',
        position: 'absolute',
        fontSize: '16px',
        top: '135px',
        left: '517px',
        width: '185px',
        border: 'none',
    },
    inputTendencia: {
        height: '24px',
        position: 'absolute',
        fontSize: '16px',
        top: '135px',
        left: '751px',
        width: '200px',
        border: 'none',
    },
    inputXp: {
        height: '24px',
        position: 'absolute',
        fontSize: '16px',
        top: '135px',
        left: '954px',
        width: '194px',
        border: 'none',
    },

};

const DadosBasicos = props =>
    <div style={styles.container}>
        <input
            style={styles.inputNomePersonagem}
            type="text"
            defaultValue={props.nomePersonagem}
        />
        <input
            style={styles.inputClasse}
            type="text"
            value={props.classe}
            readOnly
        />
        <input        
            style={styles.inputNivel}
            type="text"
            value={props.nivel}
            readOnly
        />
        <input
            style={styles.inputAntecedente}
            type="text"
            value={props.antecedente}
            readOnly
        />
        <input
            style={styles.inputNomeJogador}
            type="text"
            value={props.nomeJogador}
            readOnly
        />
        <input
            style={styles.inputRaca}
            type="text"
            value={props.raca}
            readOnly
        />
        <input
            style={styles.inputTendencia}
            type="text"
            value={props.tendencia}
            readOnly
        />
        <input
            style={styles.inputXp}
            type="text"
            value={props.xp}
            readOnly
        />
    </div>

export default DadosBasicos