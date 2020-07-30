import React from "react"

import Image from '../../images/bonus-proficiencia.png'

const styles = {
    container: {
        width: 238,
        height: 73,

        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 10,
    },
    inputValor: {
        width: '32px',
        height: '32px',
        position: 'absolute',
        top: '20px',
        left: '33px',
        textAlign: 'center',
        fontSize: '20px',
        border: 'none',
        //backgroundColor: '#dedfdf',
        fontWeight: 'bold'
    },
};

const BonusProficiencia = props =>
    <div style={styles.container}>
        <input
            readOnly
            type="text"            
            style={styles.inputValor}
            value={props.value}
        />
    </div>

export default BonusProficiencia