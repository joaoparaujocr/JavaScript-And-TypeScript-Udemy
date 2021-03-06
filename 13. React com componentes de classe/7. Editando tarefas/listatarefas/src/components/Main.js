import React, { Component } from 'react';

// Form
import './Main.css';
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    };

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

                <form onSubmit={this.handleSubmit} action="#" className="form">
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit
                                    onClick={(e) => this.handleEdit(e, index)}
                                    className="edit"
                                />
                                <FaTrashAlt
                                    onClick={(e) => this.handleDelete(e, index)}
                                    className="delete"
                                />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
