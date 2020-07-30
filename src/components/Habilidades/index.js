import React from "react"

import Habilidade from '../Habilidade'

const Habilidades = props =>
    <>
        <div className="row">
            <div className="col-sm">
                <Habilidade
                    label="FORÇA"
                    value={props.forca}
                    modificador={props.forcaModificador}
                    onChange={props.onChangeForca}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <Habilidade
                    label="DESTREZA"
                    value={props.destreza}
                    modificador={props.destrezaModificador}
                    onChange={props.onChangeDestreza}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <Habilidade
                    label="CONSTITUIÇÃO"
                    value={props.constituicao}
                    modificador={props.constituicaoModificador}
                    onChange={props.onChangeConstituicao}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <Habilidade
                    label="INTELIGÊNCIA"
                    value={props.inteligencia}
                    modificador={props.inteligenciaModificador}
                    onChange={props.onChangeInteligencia}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <Habilidade
                    label="SABEDORIA"
                    value={props.sabedoria}
                    modificador={props.sabedoriaModificador}
                    onChange={props.onChangeSabedoria}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <Habilidade
                    label="CARISMA"
                    value={props.carisma}
                    modificador={props.carismaModificador}
                    onChange={props.onChangeCarisma}
                />
            </div>
        </div>
    </>

export default Habilidades