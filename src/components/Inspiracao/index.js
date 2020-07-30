import React from "react"

import Image from '../../images/inspiracao.png'

const styles = {
    container: {
        width: 237,
        height: 60,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',        
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 10,
    },
    inputValor: {
        width: '50px',
        height: '40px',
        position: 'absolute',
        top: '10px',
        left: '19px',
        textAlign: 'center',
        fontSize: '20px',
        border: 'none',
        //backgroundColor: '#dedfdf',
        fontWeight: 'bold'
    },
};

const Inspiracao = props =>
    <div style={styles.container}>
        <input
            readOnly
            type="text"            
            style={styles.inputValor}
            value={props.value}
        />
    </div>

export default Inspiracao