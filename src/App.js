import React from "react";
import styled from "styled-components";

export const Body = styled.div`
  background-color: pink;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  vertical-align: center;

  input {
    border: none;
    width: 50%;
    padding: 20px;
  }

  button {
    border: none;
    background-color: purple;
    color: white;
    padding: 10px;
    margin: 20px;
  }
`;
export const Tarefa = styled.div`
  width: 25em;
  margin: 0 auto 10px;

  display: flex;
  justify-content: space-between;
  text-align: center;

  background-color: deeppink;
`;

export default class App extends React.Component {
  state = {
    tarefa: "",
    lista: []
  };

  buscarTarefa = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  adicionar = () => {
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Date.now()
      }),
      tarefa: ""
    });
  };

  removerTarefa = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <Body>
        <h1>Lista de Tarefas</h1>
        <input
          onChange={this.buscarTarefa}
          placeholder="Insira uma tarefa"
          type="text"
          value={this.state.tarefa}
        />
        <button onClick={this.adicionar}>Adicionar</button>

        {this.state.lista.map((item) => (
          <Tarefa>
            <p>{item.tarefa}</p>
            <button onClick={() => this.removerTarefa(item.id)}>Remover</button>
          </Tarefa>
        ))}
      </Body>
    );
  }
}
