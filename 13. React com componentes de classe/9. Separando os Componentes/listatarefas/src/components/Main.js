import React, { Component } from 'react';

// Form
import './Main.css';
import Form from './Form';

// Tarefas
import Tarefas from './Tarefas';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    };

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));
        if (!tarefas) return;
        this.setState({
            tarefas,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.indexOf(novaTarefa) !== -1) return;

        if (index === -1) {
            // const novasTarefas = [...tarefas];
            this.setState({
                tarefas: [...tarefas, novaTarefa],
                novaTarefa: '',
            });
        } else {
            tarefas[index] = novaTarefa;
            this.setState({
                tarefas: [...tarefas],
                novaTarefa: '',
                index: -1,
            });
        }
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    };

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        tarefas.splice(index, 1);
        this.setState({
            tarefas: [...tarefas],
        });
    };

    handleEdit = (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index],
        });
    };

    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

                <Tarefas
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    tarefas={tarefas}
                />
            </div>
        );
    }
}