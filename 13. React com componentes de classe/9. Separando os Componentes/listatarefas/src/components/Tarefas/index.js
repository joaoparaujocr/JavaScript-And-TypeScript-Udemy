/* eslint-disable linebreak-style */
import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Tarefas.css';

export default function Tarefas({ handleDelete, handleEdit, tarefas }) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <span>
                        <FaEdit
                            onClick={(e) => handleEdit(e, index)}
                            className="edit"
                        />
                        <FaTrashAlt
                            onClick={(e) => handleDelete(e, index)}
                            className="delete"
                        />
                    </span>
                </li>
            ))}
        </ul>
    );
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
};
