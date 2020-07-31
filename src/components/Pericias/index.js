import React from "react"

import Image from '../../images/pericias.png'

const styles = {
    container: {
        border: 'solid',
        borderTopLeftRadius: 15,
        borderColor: 'black',
        borderBottomRightRadius: 15,
        borderWidth: 3,
        marginBottom: 10,
        maxHeight: 800,
        padding: 12,
        paddingTop: 0,
        paddingBottom: 1,
    },
    label: {
        fontSize: 14,
    },
    titulo: {
        border: 'solid',
        borderTopLeftRadius: 15,
        borderColor: 'black',
        color: 'white',
        background: 'black',
        paddingLeft: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 8,
    },
    inputs: {
        width: 32,
        height: 20,
        left: 57,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
};

const Pericias = props =>
    <div className="container" style={styles.container}>
        <div className="row align-items-start" style={styles.titulo}>
            <div className="col">
                <h6>PERÍCIAS</h6>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={styles.inputs}
                    value={props.destrezaModificador}
                /> <label style={styles.label}>Acrobacia</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.inteligenciaModificador}
                /> <label style={styles.label}>Arcanismo</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.forcaModificador}
                /> <label style={styles.label}>Atletismo</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.carismaModificador}
                /> <label style={styles.label}>Atuação</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.carismaModificador}
                /> <label style={styles.label}>Blefar</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.destrezaModificador}
                /> <label style={styles.label}>Furtividade</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.inteligenciaModificador}
                /> <label style={styles.label}>História</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.carismaModificador}
                /> <label style={styles.label}>Intimidação</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.sabedoriaModificador}
                /> <label style={styles.label}>Intuicao</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.inteligenciaModificador}
                /> <label style={styles.label}>Investigação</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.sabedoriaModificador}
                /> <label style={styles.label}>Lidar com animal</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.sabedoriaModificador}
                /> <label style={styles.label}>Medicina</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.inteligenciaModificador}
                /> <label style={styles.label}>Natureza</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.sabedoriaModificador}
                /> <label style={styles.label}>Percepção</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.carismaModificador}
                /> <label style={styles.label}>Persuasão</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.destrezaModificador}
                /> <label style={styles.label}>Prestidigitação</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.inteligenciaModificador}
                /> <label style={styles.label}>Religião</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.sabedoriaModificador}
                /> <label style={styles.label}>Sobrevivência</label>
            </div>
        </div>
    </div>

export default Pericias