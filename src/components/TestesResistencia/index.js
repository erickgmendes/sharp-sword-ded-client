import React from "react"

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

const TestesResistencia = props =>
    <div className="container" style={styles.container}>

        <div className="row align-items-start" style={styles.titulo}>
            <div className="col">
                <h6>TESTES DE RESISTÊNCIA</h6>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={styles.inputs}
                    value={props.forcaModificador}
                /> <label style={styles.label}>Força</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.destrezaModificador}
                /> <label style={styles.label}>Destreza</label>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.constituicaoModificador}
                /> <label style={styles.label}>Constituição</label>

            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.inteligenciaModificador}
                /> <label style={styles.label}>Inteligência</label>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.sabedoriaModificador}
                /> <label style={styles.label}>Sabedoria</label>
            </div>
            <div className="col">
                <input
                    readOnly
                    type="text"
                    style={{ ...styles.inputs }}
                    value={props.carismaModificador}
                /> <label style={styles.label}>Carisma</label>
            </div>
        </div>
    </div>

export default TestesResistencia