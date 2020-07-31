import React from "react"

const styles = {
    container: {
        border: 'solid',
        borderTopLeftRadius: 15,
        borderColor: 'black',
        borderBottomRightRadius: 15,
        borderWidth: 3,
        marginBottom: 10,
        height: 127,
        padding: 12,
        paddingTop: 0,
    },
    titulo: {
        border: 'solid',
        borderTopLeftRadius: 15,
        borderColor: 'black',
        color: 'white',
        background: 'black',
        paddingLeft: 0,        
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 8,        
    },
    input: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 36,
        width: 50,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingRight: 5,
    },    
};

const Habilidade = props =>
    <div className="container" style={styles.container}>
        <div className="row align-items-start" style={styles.titulo}>
            <div className="col">
                <h6>{props.label}</h6>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <input
                    type="text"
                    style={styles.input}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <label style={styles.label}>Modificador: {props.modificador}</label>
            </div>
        </div>
    </div>

export default Habilidade