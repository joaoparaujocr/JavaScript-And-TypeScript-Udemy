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
        tarefas: [
            'Fazer café',
            'Beber água',
            'estudar',
        ],
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    };

    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form action="#" className="form">
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
                    {tarefas.map((tarefa) => (
                        <li key={tarefa}>
                            {tarefa}
                            <div>
                                <FaEdit className="edit" />
                                <FaTrashAlt className="delete" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
