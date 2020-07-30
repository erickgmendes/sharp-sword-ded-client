import React, { Component } from "react"

// Componentes
import TextBox from "../TextBox"
import ComboBox from "../ComboBox"
import Habilidade from "../Habilidade"
import DadosBasicos from "../DadosBasicos"

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
      forca: "",
      destreza: "",
      constituicao: "",
      inteligencia: "",
      sabedoria: "",
      carisma: "",
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
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
        <img src=""></img>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <DadosBasicos />
          </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <TextBox
                  label="Nome do Jogador"
                  value={this.state.nomePersonagem}
                  onChange={e => this.setState({ nomePersonagem: e.target.value })}
                />
              </div>
              <div className="col-sm-4">
                <TextBox
                  label="Nome do Personagem"
                  value={this.state.nomePersonagem}
                  onChange={e => this.setState({ nomePersonagem: e.target.value })}
                />
              </div>
              <div className="col-sm-2">
                <ComboBox
                  label="Nível"
                  value={this.state.nivel}
                  onChange={e => this.setState({ nivel: e.target.value })}
                  lista={this.state.niveis}
                />
              </div>
              <div className="col-sm-2">
                <TextBox
                  label="XP"
                  value={this.state.nomePersonagem}
                  onChange={e => this.setState({ nomePersonagem: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <ComboBox
                  label="Classe"
                  value={this.state.classe}
                  onChange={e => this.setState({ classe: e.target.value })}
                  lista={this.state.classes}
                />
              </div>
              <div className="col-sm">
                <ComboBox
                  label="Raça"
                  value={this.state.raca}
                  onChange={e => this.setState({ raca: e.target.value })}
                  lista={this.state.racas}
                />
              </div>
              <div className="col-sm">
                <ComboBox
                  label="Antecedente"
                  value={this.state.nivel}
                  onChange={e => this.setState({ nivel: e.target.value })}
                  lista={this.state.niveis}
                />
              </div>
              <div className="col-sm">
                <ComboBox
                  label="Tendência"
                  value={this.state.nivel}
                  onChange={e => this.setState({ nivel: e.target.value })}
                  lista={this.state.niveis}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4">
                <div className="row">
                  <div className="col-sm-6">
                    <Habilidade
                      label="FORÇA"
                      value="30"
                      modificador="+10"
                    />
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
                    <Habilidade
                      label="DESTREZA"
                      value="18"
                      modificador="+4"
                    />
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
                    <Habilidade
                      label="CONSTITUIÇÃO"
                      value="30"
                      modificador="+10"
                    />
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
                    <Habilidade
                      label="INTELIGÊNCIA"
                      value="18"
                      modificador="+4"
                    />
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
                    <Habilidade
                      label="SABEDORIA"
                      value="18"
                      modificador="+4"
                    />
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
                    <Habilidade
                      label="CARISMA"
                      value="18"
                      modificador="+4"
                    />
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
              <div className="col-sm">
                Vago
              </div>
              <div className="col-sm">
                <TextBox
                  label="Nome do Personagem"
                  value={this.state.nomePersonagem}
                  onChange={e => this.setState({ nomePersonagem: e.target.value })}
                />
              </div>
              <div className="col-sm">
                <TextBox
                  label="Nome do Personagem"
                  value={this.state.nomePersonagem}
                  onChange={e => this.setState({ nomePersonagem: e.target.value })}
                />
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
      </>
    );
  }
}