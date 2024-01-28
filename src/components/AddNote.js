import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const { addnotes } = context;
    const [note, setnote] = useState({ title: "", description: "", tag: ""});
    const handleclick = (e) => {
        e.preventDefault();
        addnotes(note.title, note.description, note.tag)
        setnote({ title: "", description: "", tag: "" })
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    
    return (
        <>
            <form className="row mb-3 d-flex justify-content-center">
                <div className="col-7 mb-2">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control input-group-sm rounded-pill" id="title" name="title" value={note.title} onChange={onChange} placeholder="title" />
                </div>
                <div className="col-7 mb-2">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control rounded-pill" id="description" value={note.description} name="description" placeholder="description" onChange={onChange} />
                </div>
                <div className="col-7 mb-2">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control rounded-pill" id="tag" value={note.tag} name="tag" placeholder="e.g. Books" onChange={onChange} />
                </div>
                <div className="col-7 mb-2 d-flex justify-content-center">
                    <button type="submit" onClick={handleclick} className="btn bt-lg bg-dark text-light rounded-pill">Add Note</button>
                </div>
            </form>
        </>
    )
}