import React, { Component } from "react";

// Componentes
import TextBox from "../TextBox";
import DisabledTextBox from "../DisabledTextBox";
import ComboBox from "../ComboBox";

// API
//import { fetchRacas } from "../../service/raca-api";
//import { fetchClasses } from "../../service/classe-api";
import { fetchNiveis } from "../../service/nivel-api";

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
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h4>Ficha de Personagem</h4>
                <hr />
              </div>
            </div>
            <div className="row">
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
                  label="Nível"
                  value={this.state.nivel}
                  onChange={e => this.setState({ nivel: e.target.value })}
                  lista={this.state.niveis}
                />
              </div>
              <div className="col-sm">
                <ComboBox
                  label="Classe"
                  value={this.state.classe}
                  onChange={e => this.setState({ classe: e.target.value })}
                  lista={this.state.classes}
                />
              </div>
            </div>
            <div className="row">
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
        </form>
      </>
    );
  }
}