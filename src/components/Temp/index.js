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
};

const Temp = props =>
    <div className="container" style={styles.container}>
        <div className="row align-items-start" style={styles.titulo}>
            <div className="col">
                <h6>TEMP</h6>
            </div>
        </div>
        <div className="row">
            <div className="col">
            </div>
            <div className="col">
            </div>
        </div>
    </div>

export default Temp