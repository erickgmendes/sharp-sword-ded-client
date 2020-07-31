import React from "react"

import Image from '../../images/ca.png'

const styles = {
    container: {
        height: 132,
        width: 112,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginLeft: 0,
        marginTop: 0,
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
        left: 45,
        fontSize: 36,
    },
};

const ClasseArmadura = props =>
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

export default ClasseArmadura