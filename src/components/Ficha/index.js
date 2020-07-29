import React, { Component } from "react";

// Componentes
import TextBox from "../TextBox";
import DisabledTextBox from "../DisabledTextBox";
import ComboBox from "../ComboBox";

// API
import { fetchRacas } from "../../service/raca-api";
import { fetchClasses } from "../../service/classe-api";
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
    fetchRacas().then(res => this.setState({ racas: res.data }));
    fetchClasses().then(res => this.setState({ classes: res.data }));

    this.setState({ niveis: fetchNiveis() });
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h3>Ficha de Personagem</h3>
        <hr />
        <row>
          <col sm={3}>
            <TextBox
              label="Nome do Personagem"
              value={this.state.nomePersonagem}
              onChange={e =>
                this.setState({ nomePersonagem: e.target.value })
              }
            />
          </col>
          <col sm={3}>
            <TextBox
              label="Nome do Jogador"
              value={this.state.nomeJogador}
              onChange={e => this.setState({ nomeJogador: e.target.value })}
            />
          </col>
          <col sm={3}>
            <ComboBox
              label="Nível"
              value={this.state.nivel}
              onChange={e => this.setState({ nivel: e.target.value })}
              lista={this.state.niveis}
            />
          </col>
          <col sm={3}>
            <ComboBox
              label="Alinhamento"
              value={this.state.alinhamento}
              onChange={e => this.setState({ alinhamento: e.target.value })}
              lista={this.state.alinhamentos}
            />
          </col>
        </row>
        <row>
          <col sm={3}>
            <ComboBox
              label="Raça"
              value={this.state.raca}
              onChange={e => this.setState({ raca: e.target.value })}
              lista={this.state.racas}
            />
          </col>
          <col sm={3}>
            <ComboBox
              label="Classe"
              value={this.state.classe}
              onChange={e => this.setState({ classe: e.target.value })}
              lista={this.state.classes}
            />
          </col>
          <col sm={6}>
            <TextBox
              label="Características Físicas"
              value={this.state.caracteristicasFisicas}
              onChange={e =>
                this.setState({ caracteristicasFisicas: e.target.value })
              }
            />
          </col>
        </row>

        <row>
          <col sm={2}>
            <DisabledTextBox
              label="Classe Armadura"
              value={this.state.ca}
            />
          </col>
          <col sm={2}>
            <DisabledTextBox label="Bônus Armadura" value={this.state.ba} />
          </col>
          <col sm={2}>
            <DisabledTextBox label="Jogada Proteção" value={this.state.jp} />
          </col>
          <col sm={2}>
            <DisabledTextBox label="Pontos de Vida" value={this.state.pv} />
          </col>
          <col sm={2}>
            <DisabledTextBox label="Movimento" value={this.state.movimento} />
          </col>
          <col sm={2}>
            <DisabledTextBox label="XP Atual" value={this.state.xp} />
          </col>
        </row>

        <row>
          <col sm={2}>
            <ComboBox
              label="Força"
              value={this.state.forca}
              onChange={this.onChangeForca}
              lista={this.state.rolagemDados}
            />
          </col>
          <col sm={4}>
            <DisabledTextBox
              label="Ajuste de ataque e dano"
              value={this.state.calculoForca.ajuste}
            />
          </col>
          <col sm={2}>
            <DisabledTextBox
              label="Carga leve"
              value={this.state.calculoForca.cargaLeve}
            />
          </col>
          <col sm={2}>
            <DisabledTextBox
              label="Carga pesada"
              value={this.state.calculoForca.cargaPesada}
            />
          </col>
          <col sm={2}>
            <DisabledTextBox
              label="Carga máxima"
              value={this.state.calculoForca.cargaMaxima}
            />
          </col>
        </row>

        <row>
          <col sm={2}>
            <ComboBox
              label="Inteligência"
              value={this.state.inteligencia}
              onChange={this.onChangeInteligencia}
              lista={this.state.rolagemDados}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Idiomas Adicionais"
              value={this.state.calculoInteligencia.idiomasAdicionais}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Chance de Aprender Magia"
              value={this.state.calculoInteligencia.chanceDeAprenderMagia}
            />
          </col>
          <col sm={4}>
            <DisabledTextBox
              label="Magias Arcanas Adicionais"
              value={this.state.calculoInteligencia.magiasArcanasAdicionais}
            />
          </col>
        </row>
        <row>
          <col sm={2}>
            <ComboBox
              label="Sabedoria"
              value={this.state.sabedoria}
              onChange={this.onChangeSabedoria}
              lista={this.state.rolagemDados}
            />
          </col>
          <col sm={5}>
            <DisabledTextBox
              label="Ajuste de Proteção"
              value={this.state.calculoSabedoria.ajusteProtecao}
            />
          </col>
          <col sm={5}>
            <DisabledTextBox
              label="Magias Divinas Adicionais"
              value={this.state.calculoSabedoria.magiasAdicionais}
            />
          </col>
        </row>

        <row>
          <col sm={2}>
            <ComboBox
              label="Destreza"
              value={this.state.destreza}
              onChange={this.onChangeDestreza}
              lista={this.state.rolagemDados}
            />
          </col>
          <col sm={5}>
            <DisabledTextBox
              label="Ajuste de ataque, surpresa, defesa e proteção"
              value={
                this.state.calculoDestreza.ajusteAtaqueSurpresaDefesaProtecao
              }
            />
          </col>
          <col sm={5}>
            <DisabledTextBox
              label="Localizar e desarmar armadilhas"
              value={this.state.calculoDestreza.localizarDesarmarArmadilhas}
            />
          </col>
        </row>

        <row>
          <col sm={2}></col>
          <col sm={5}>
            <DisabledTextBox
              label="Mover-se em silêncio e Abrir fechaduras"
              value={
                this.state.calculoDestreza.moverSeEmSilecioAbrirFechaduras
              }
            />
          </col>
          <col sm={5}>
            <DisabledTextBox
              label="Esconder-se nas sombras e Pungar"
              value={this.state.calculoDestreza.esconderSeNasSombrasPungar}
            />
          </col>
        </row>
        <row>
          <col sm={2}>
            <ComboBox
              label="Constituição"
              value={this.state.constituicao}
              onChange={this.onChangeConstituicao}
              lista={this.state.rolagemDados}
            />
          </col>
          <col sm={5}>
            <DisabledTextBox
              label="Pontos de vida e proteção"
              value={this.state.calculoConstituicao.pontosDeVidaEProtecao}
            />
          </col>
          <col sm={5}>
            <DisabledTextBox
              label="Chance de ressurreição"
              value={this.state.calculoConstituicao.percentualRessurreicao}
            />
          </col>
        </row>

        <row>
          <col sm={2}>
            <ComboBox
              label="Carisma"
              value={this.state.carisma}
              onChange={this.onChangeCarisma}
              lista={this.state.rolagemDados}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Número máximo de seguidores"
              value={this.state.calculoCarisma.numeroSeguidores}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Ajuste de reação"
              value={this.state.calculoCarisma.ajuste}
            />
          </col>
          <col sm={4}>
            <DisabledTextBox
              label="Quantidade de mortos-vivos afastada"
              value={this.state.calculoCarisma.mortosVivos}
            />
          </col>
        </row>

        <h5>Dinheiro</h5>
        <row>
          <col sm={3}>
            <TextBox
              label="Inicial (3d6 x 10)"
              value={this.state.dinheiroInicial}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox label="Ouro" value={this.state.dinheiro.ouro} />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Prata"
              value={this.state.dinheiro.prata}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Cobre"
              value={this.state.dinheiro.cobre}
            />
          </col>
        </row>

        <h5>Expulsar Mortos</h5>
        <row>
          <col sm={3}>
            <DisabledTextBox
              label="Esqueleto"
              value={this.state.calculoClerigo.esqueleto}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Zumbi"
              value={this.state.calculoClerigo.zumbi}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Carniçal"
              value={this.state.calculoClerigo.carnical}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Inumano"
              value={this.state.calculoClerigo.inumano}
            />
          </col>
        </row>
        <row>
          <col sm={3}>
            <DisabledTextBox
              label="Aparição"
              value={this.state.calculoClerigo.aparicao}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Múmia"
              value={this.state.calculoClerigo.mumia}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Espectro"
              value={this.state.calculoClerigo.espectro}
            />
          </col>
          <col sm={3}>
            <DisabledTextBox
              label="Vampiro"
              value={this.state.calculoClerigo.vampiro}
            />
          </col>
        </row>

        <button variant="primary" type="submit">Submit</button>
      </form>
    );
  }
}
