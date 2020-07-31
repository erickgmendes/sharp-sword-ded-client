import React from "react"

import Image from '../../images/idiomas-proficiencias.png'

const styles = {
    container: {
        width: 300,
        height: 302,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        border: 'solid',
        borderColor: 'red'
    },
    inputValor: {
        width: 345,
        height: 260,
        position: 'absolute',
        fontSize: 14,
        border: 'none',
        resize: 'none',
        margin: 4,
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