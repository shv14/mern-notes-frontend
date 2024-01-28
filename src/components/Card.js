import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

export default function Card(props) {
    const context = useContext(noteContext);
    const { deletenotes } = context;
    const { note, editnote } = props;
    return (
        <div className="card my-4 product" data-bs-theme={`${props.mode}`} style={{ width: 18 + 'rem' }}>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{props.title}</h5>
                <h6 className="card-title"> Tag: {props.tag}</h6>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-sm bg-dark text-light rounded-pill" onClick={() => { deletenotes(note.id) }}>Delete</button>
                <button className="btn btn-sm mx-2 bg-dark text-light rounded-pill" onClick={() => { editnote(note) }}>Edit</button>
            </div>
        </div>
    );
}

Card.defaultProps = {
    title: "Title",
    description: "Description",
}