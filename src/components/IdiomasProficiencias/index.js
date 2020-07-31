import React from "react"

import Image from '../../images/idiomas-proficiencias.png'

const styles = {
    container: {
        width: 376,
        height: 302,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginLeft: 10,
        marginTop: 0,
        marginBottom: 10,
    },
    inputValor: {
        width: 345,
        height: 260,
        position: 'absolute',
        top: 13,
        left: 43,
        fontSize: 14,
        border: 'none',
        resize: 'none',
        textAlign: 'justify',
        //backgroundColor: '#dedfdf',        
    },
};

const IdiomasProficiencias = props =>
    <div style={styles.container}>
        <textarea
            style={styles.inputValor}
            value={props.value}
        />
    </div>

export default IdiomasProficiencias