import React from "react"

import Image from '../../images/testes-resistencia.png'

const styles = {
    container: {
        width: 240,
        height: 214,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 10,
    },
    inputs: {
        width: 32,
        height: 16,
        position: 'absolute',
        left: 57,
        textAlign: 'center',
        fontSize: 14,
        border: 'none',
        fontWeight: 'bold'
    },
    inputForca: {
        top: 14,
    },
    inputDestreza: {
        top: 42,
    },
    inputConstituicao: {
        top: 70,
    },
    inputInteligencia: {
        top: 98,
    },
    inputSabedoria: {
        top: 126,
    },
    inputCarisma: {
        top: 154,
    },
};

const TestesResistencia = props =>
    <div style={styles.container}>
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputForca
            }}
            value={props.forcaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputDestreza
            }}
            value={props.destrezaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputConstituicao
            }}
            value={props.constituicaoModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputInteligencia
            }}
            value={props.inteligenciaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputSabedoria
            }}
            value={props.sabedoriaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputCarisma
            }}
            value={props.carismaModificador}
        />
    </div>

export default TestesResistencia