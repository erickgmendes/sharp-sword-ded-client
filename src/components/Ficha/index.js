import React, { Component } from "react"

// Componentes
import DadosBasicos from "../DadosBasicos"
import Habilidades from "../Habilidades"
import Inspiracao from "../Inspiracao"
import BonusProficiencia from "../BonusProficiencia"
import TestesResistencia from "../TestesResistencia"
import Pericias from "../Pericias"
import SabedoriaPassivaPercepcao from "../SabedoriaPassivaPercepcao"
import IdiomasProficiencias from "../IdiomasProficiencias"


// API
//import { fetchRacas } from "../../service/raca-api";
//import { fetchClasses } from "../../service/classe-api";
import { fetchNiveis } from "../../service/nivel-api"

export default class Ficha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      jogador: "",
      classe: "",
      nivel: "",
      raca: "",
      tendencia: "",
      divindade: "",
      idade: "",
      sexo: "",
      altura: "",
      peso: "",
      corOlhos: "",
      corCabelos: "",
      corPele: "",
      forca: "3",
      destreza: "3",
      constituicao: "3",
      inteligencia: "3",
      sabedoria: "3",
      carisma: "3",
      forcaModificador: "-4",
      destrezaModificador: "-4",
      constituicaoModificador: "-4",
      inteligenciaModificador: "-4",
      sabedoriaModificador: "-4",
      carismaModificador: "-4",

      classes: [],
      racas: [],
      niveis: [],
      rolagemDados: []
    };
  }

  componentDidMount() {
    //fetchRacas().then(res => this.setState({ racas: res.data }));
    //fetchClasses().then(res => this.setState({ classes: res.data }));

    this.setState({ niveis: fetchNiveis() });
  }

  onFormSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  calcularModificadorHabilidade = (valor) => {
    switch (valor) {
      //case '1': return '-5'; break;
      case '2': case '3': return '-4'
      case '4': case '5': return '-3'
      case '6': case '7': return '-2'
      case '8': case '9': return '-1'
      case '10': case '11': return '0'
      case '12': case '13': return '+1'
      case '14': case '15': return '+2'
      case '16': case '17': return '+3'
      case '18': case '19': return '+4'
      case '20': case '21': return '+5'
      case '22': case '23': return '+6'
      case '24': case '25': return '+7'
      case '26': case '27': return '+8'
      case '28': case '29': return '+9'
      case '30': return '+10'
      default: return '-5'
    }
  }

  onChangeForca = event => {
    let valor = event.target.value
    let modificador = this.calcularModificadorHabilidade(valor)

    this.setState({ forca: valor }, () => {
      this.setState({ forcaModificador: modificador })
    })
  }

  onChangeDestreza = event => {
    let valor = event.target.value
    let modificador = this.calcularModificadorHabilidade(valor)
    this.setState({ destreza: valor }, () => {
      this.setState({ destrezaModificador: modificador })
    })
  }

  onChangeConstituicao = event => {
    let valor = event.target.value
    let modificador = this.calcularModificadorHabilidade(valor)
    this.setState({ constituicao: valor }, () => {
      this.setState({ constituicaoModificador: modificador })
    })
  }

  onChangeInteligencia = event => {
    let valor = event.target.value
    let modificador = this.calcularModificadorHabilidade(valor)
    this.setState({ inteligencia: valor }, () => {
      this.setState({ inteligenciaModificador: modificador })
    })
  }

  onChangeSabedoria = event => {
    let valor = event.target.value
    let modificador = this.calcularModificadorHabilidade(valor)
    this.setState({ sabedoria: valor }, () => {
      this.setState({ sabedoriaModificador: modificador })
    })
  }

  onChangeCarisma = event => {
    let valor = event.target.value
    let modificador = this.calcularModificadorHabilidade(valor)
    this.setState({ carisma: valor }, () => {
      this.setState({ carismaModificador: modificador })
    })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <DadosBasicos
                nomePersonagem="Darth Vader Skywalker"
                classe="Guerreiro"
                raca="Humano"
                nivel="1"
                antecedente="Criminais"
                nomeJogador="Erick Mendes"
                tendencia="Agressivo"
                xp="1000"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-4">
                  <Habilidades
                    forca={this.state.forca}
                    forcaModificador={this.state.forcaModificador}
                    onChangeForca={this.onChangeForca}

                    destreza={this.state.destreza}
                    destrezaModificador={this.state.destrezaModificador}
                    onChangeDestreza={this.onChangeDestreza}

                    constituicao={this.state.constituicao}
                    constituicaoModificador={this.state.constituicaoModificador}
                    onChangeConstituicao={this.onChangeConstituicao}

                    inteligencia={this.state.inteligencia}
                    inteligenciaModificador={this.state.inteligenciaModificador}
                    onChangeInteligencia={this.onChangeInteligencia}

                    sabedoria={this.state.sabedoria}
                    sabedoriaModificador={this.state.sabedoriaModificador}
                    onChangeSabedoria={this.onChangeSabedoria}

                    carisma={this.state.carisma}
                    carismaModificador={this.state.carismaModificador}
                    onChangeCarisma={this.onChangeCarisma}
                  />
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col">
                      <Inspiracao value="16" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <BonusProficiencia value="18" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <TestesResistencia
                        forcaModificador={this.state.forcaModificador}
                        destrezaModificador={this.state.destrezaModificador}
                        constituicaoModificador={this.state.constituicaoModificador}
                        inteligenciaModificador={this.state.inteligenciaModificador}
                        sabedoriaModificador={this.state.sabedoriaModificador}
                        carismaModificador={this.state.carismaModificador}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Pericias
                        forcaModificador={this.state.forcaModificador}
                        destrezaModificador={this.state.destrezaModificador}
                        constituicaoModificador={this.state.constituicaoModificador}
                        inteligenciaModificador={this.state.inteligenciaModificador}
                        sabedoriaModificador={this.state.sabedoriaModificador}
                        carismaModificador={this.state.carismaModificador}
                      />
                    </div>
                  </div>
                </div>
                  <div className="row">
                    <div className="col">
                      <SabedoriaPassivaPercepcao value="99"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <IdiomasProficiencias 
                      value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                    </div>
                  </div>                  
              </div>
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
            </div>
          </div>


          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
            </div>
          </div>



          <hr />
          <div className="row">
            <div className="col-sm">

            </div>
            <div className="col-sm">
              <button className="btn btn-outline-primary btn-sm form-control form-control-sm" type="submit">Enviar Formulário</button>
            </div>
            <div className="col-sm">
            </div>
          </div>
        </div>
      </form >
    );
  }
}