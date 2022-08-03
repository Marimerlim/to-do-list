import React from "react";

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
      <>
        <h1>Lista de Tarefas</h1>
        <input
          onChange={this.buscarTarefa}
          placeholder="Insira uma tarefa"
          type="text"
          value={this.state.tarefa}
        />
        <button onClick={this.adicionar}>Adicionar</button>

        {this.state.lista.map((item) => (
          <div>
            <p>{item.tarefa}</p>
            <button onClick={() => this.removerTarefa(item.id)}>Remover</button>
          </div>
        ))}
      </>
    );
  }
}
