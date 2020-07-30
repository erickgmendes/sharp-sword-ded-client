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
        marginBottom: 10,
    },
    label: {
        width: '100px',
        height: '100px',
        top: '55px',
        left: '70px',

        position: 'absolute',
        marginTop: '-50px',
        marginLeft: '-50px',
        
        fontWeight: 'bold',
        fontSize: '12px',
        textAlign: 'center',
        //border: 'solid',
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
        //backgroundColor: '#dedfdf',
        fontWeight: 'bold'
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
            type="text"
            maxLength="2"
            min="3"
            max="18"
            style={styles.inputValor}
            label={props.label}
            value={props.value}
            onChange={props.onChange}
        />
        <input
            readOnly
            type="text"
            style={styles.inputModificador}
            value={props.modificador}
        />

    </div>

export default Habilidade