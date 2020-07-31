import React from "react"

import Habilidade from '../Habilidade'

const styles = {
    container: {
        border: 'solid',
        borderTopLeftRadius: 15,
        borderColor: 'black',
        borderBottomRightRadius: 15,
        borderWidth: 3,
        marginBottom: 10,
        maxHeight: 800,
        padding: 12,
        paddingTop: 0,
        paddingBottom: 1,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold'
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
    inputs: {
        width: 32,
        height: 20,
        left: 57,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
};

const Habilidades = props =>
    <>
        <div className="container" style={styles.container}>

            <div className="row align-items-start" style={styles.titulo}>
                <div className="col">
                    <h6>HABILIDADES</h6>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Habilidade
                        label="Força"
                        value={props.forca}
                        modificador={props.forcaModificador}
                        onChange={props.onChangeForca}
                    />
                </div>
                <div className="col">
                    <Habilidade
                        label="Destreza"
                        value={props.destreza}
                        modificador={props.destrezaModificador}
                        onChange={props.onChangeDestreza}
                        s />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Habilidade
                        label="Constituição"
                        value={props.constituicao}
                        modificador={props.constituicaoModificador}
                        onChange={props.onChangeConstituicao}
                    />
                </div>
                <div className="col">
                    <Habilidade
                        label="Inteligência"
                        value={props.inteligencia}
                        modificador={props.inteligenciaModificador}
                        onChange={props.onChangeInteligencia}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Habilidade
                        label="Sabedoria"
                        value={props.sabedoria}
                        modificador={props.sabedoriaModificador}
                        onChange={props.onChangeSabedoria}
                    />
                </div>
                <div className="col">
                    <Habilidade
                        label="Carisma"
                        value={props.carisma}
                        modificador={props.carismaModificador}
                        onChange={props.onChangeCarisma}
                    />
                </div>
            </div>
        </div>
    </>

export default Habilidades