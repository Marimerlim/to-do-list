import React from "react";
import styled from "styled-components";

export const Corpo = styled.div`
  background-color: pink;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  vertical-align: center;
  padding: 10px;

  h1 {
    padding: 10px;
  }

  input {
    border: none;
    width: 50%;
    border-radius: 10px;
    padding: 20px;
  }

  button {
    border: none;
    background-color: purple;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 20px;
  }
`;

export const Tarefa = styled.div`
  width: 70%;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  background-color: deeppink;
  border-radius: 25px;

  p {
    margin-left: 20px;
    color: white;
  }

  button {
    background-color: lightsalmon;
    color: black;
    border-radius: 30px;
  }
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
      <Corpo>
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
      </Corpo>
    );
  }
}
