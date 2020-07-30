import React from "react"

import Image from '../../images/habilidade.png'

const styles = {
    container: {
        height: 132,
        width: 112,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 30,
    },
    label: {
        width: 100,
        height: 100,
        top: 55,
        left: 70,
        position: 'absolute',
        marginTop: -50,
        marginLeft: -50,
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        //border: 'solid',
        //backgroundColor: '#dedfdf',
    },
    inputs: {
        position: 'absolute',
        textAlign: 'center',
        border: 'none',
        fontWeight: 'bold'
    },
    inputValor: {
        width: 50,
        height: 40,
        top: 35,
        left: 47,
        fontSize: 36,
    },
    inputModificador: {
        width: 34,
        height: 18,
        top: 99,
        left: 54,
        fontSize: 14,
    },
};

const Habilidade = props =>
    <div style={styles.container}>
        <label style={styles.label}>{props.label}</label>
        <input
            type="text"
            maxLength="2"
            min="3"
            max="18"
            style={{
                ...styles.inputs, 
                ...styles.inputValor
            }}
            label={props.label}
            value={props.value}
            onChange={props.onChange}
        />
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs, 
                ...styles.inputModificador
            }}
            value={props.modificador}
        />

    </div>

export default Habilidade