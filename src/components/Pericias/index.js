import React from "react"

import Image from '../../images/pericias.png'

const styles = {
    container: {
        width: 240,
        height: 560,
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
        left: 56,
        textAlign: 'center',
        fontSize: 14,
        border: 'none',
        fontWeight: 'bold'
    },
    inputAcrobacia: {
        top: 24,
    },
    inputArcanismo: {
        top: 52,
    },
    inputAtletismo: {
        top: 80,
    },
    inputAtuacao: {
        top: 108,
    },
    inputBlefar: {
        top: 136,
    },
    inputFurtividade: {
        top: 164,
    },
    inputHistoria: {
        top: 192,
    },
    inputIntimidacao: {
        top: 220,
    },
    inputIntuicao: {
        top: 248,
    },
    inputInvestigacao: {
        top: 276,
    },
    inputLidarComAnimais: {
        top: 304,
    },
    inputMedicina: {
        top: 332,
    },
    inputNatureza: {
        top: 360,
    },
    inputPercepcao: {
        top: 388,
    },
    inputPersuasao: {
        top: 416,
    },
    inputPrestidigitacao: {
        top: 444,
    },
    inputReligiao: {
        top: 472,
    },
    inputSobrevivencia: {
        top: 500,
    },   
};

const Pericias = props =>
    <div style={styles.container}>
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputAcrobacia
            }}
            value={props.destrezaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputArcanismo
            }}
            value={props.inteligenciaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputAtletismo
            }}
            value={props.forcaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputAtuacao
            }}
            value={props.carismaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputBlefar
            }}
            value={props.carismaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputFurtividade
            }}
            value={props.destrezaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputHistoria
            }}
            value={props.inteligenciaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputIntimidacao
            }}
            value={props.carismaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputIntuicao
            }}
            value={props.sabedoriaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputInvestigacao
            }}
            value={props.inteligenciaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputLidarComAnimais
            }}
            value={props.sabedoriaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputMedicina
            }}
            value={props.sabedoriaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputNatureza
            }}
            value={props.inteligenciaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputPercepcao
            }}
            value={props.sabedoriaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputPersuasao
            }}
            value={props.carismaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputPrestidigitacao
            }}
            value={props.destrezaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputReligiao
            }}
            value={props.inteligenciaModificador}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs,
                ...styles.inputSobrevivencia
            }}
            value={props.sabedoriaModificador}
        />
    </div>

export default Pericias