import React from "react"

import Image from '../../images/habilidade.png'

const styles = {
    container: {
        height: 132,
        width: 112,
        textAlign: 'center',
        backgroundImage: `url(${Image})`,
        marginBottom: '20px'
    },
    inputValor: {
        width: '50px',
        height: '40px',
        position: 'absolute',
        top: '35px',
        left: '47px',
        textAlign: 'center',
        fontSize: '36px',
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
    inputModificador: {
        width: '34px',
        height: '18px',
        position: 'absolute',
        top: '99px',
        left: '54px',
        textAlign: 'center',
        fontSize: '14px',
        border: 'none',
        fontWeight: 'bold'
    },

};

const Habilidade = props =>
    <div style={styles.container}>
        <label style={styles.label}>{props.label}</label>
        <input
            style={styles.inputValor}
            type="text"
            maxLength="2"
            defaultValue={props.value}
        />
        <input
            style={styles.inputModificador}
            type="text"
            value={props.modificador}
            readOnly
        />

    </div>

export default Habilidade