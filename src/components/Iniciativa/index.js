import React from "react"

import Image from '../../images/iniciativa.png'

const styles = {
    container: {
        width: 110,
        height: 103,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginLeft: 0,
        marginTop: 10,
        marginBottom: 20,
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
};

const Iniciativa = props =>
    <div style={styles.container}>
        <input
            readOnly
            type="text"
            style={{
                ...styles.inputs, 
                ...styles.inputValor
            }}
            value={props.value}
        />
    </div>

export default Iniciativa