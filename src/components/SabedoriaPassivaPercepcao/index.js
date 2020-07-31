import React from "react"

import Image from '../../images/sabedoria-passiva-percepcao.png'

const styles = {
    container: {
        width: 374,
        height: 57,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',        
        marginLeft: 10,
        marginTop: 0,
        marginBottom: 10,
    },
    inputValor: {
        width: '32px',
        height: '32px',
        position: 'absolute',
        top: '13px',
        left: '43px',
        textAlign: 'center',
        fontSize: '20px',
        border: 'none',
        //backgroundColor: '#dedfdf',
        fontWeight: 'bold'
    },
};

const SabedoriaPassivaPercepcao = props =>
    <div style={styles.container}>
        <input
            readOnly
            type="text"            
            style={styles.inputValor}
            value={props.value}
        />
    </div>

export default SabedoriaPassivaPercepcao