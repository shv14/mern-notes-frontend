import React, { useContext, useEffect, useRef, useState } from 'react';
import Card from './Card';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';

export default function About(props) {
  const context = useContext(noteContext);
  const { note, getnotes, editnotes } = context;
  useEffect(() => {
      getnotes();
  }, []);

  const ref = useRef(null);
  const refclose = useRef(null);
  const [notes, setnotes] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const editnote = (cdetails) => {
    ref.current.click();
    setnotes({ id: cdetails.id, etitle: cdetails.title, edescription: cdetails.description, etag: cdetails.tag })
  }
  
  const handleclick = (e) => {
    editnotes(notes.id, notes.etitle, notes.edescription, notes.etag)
    refclose.current.click();
  }
  const onChange = (e) => {
    setnotes({ ...notes, [e.target.name]: e.target.value })
  }

  var { input } = props;
  const filteredData = note.filter((el) => {
    if (input === '') {
      return el;
    }
    else {
      return el.title.toLowerCase().includes(input) || el.tag.toLowerCase().includes(input)
    }
  })

  return (
    <>
      <div className="container my-3">
        <AddNote key={note.id} />
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body d-flex justify-content-center">
                <div className="card p-2 my-4 product" style={{ width: 18 + 'rem' }}>
                  <div className="col-md-6">
                    <label htmlFor="title" className="form-label" >Title</label>
                    <input type="text" onChange={onChange} value={notes.etitle} className="form-control" id="etitle" name="etitle" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="description" className="form-label" >Description</label>
                    <input type="text" onChange={onChange} value={notes.edescription} className="form-control" id="edescription" name="edescription" placeholder="description" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="tag" className="form-label" >Tag</label>
                    <input type="text" onChange={onChange} value={notes.etag} className="form-control" id="etag" name="etag" placeholder="e.g. Books" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button ref={refclose} type="button" className="btn btn-sm bg-dark text-light rounded-pill" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={handleclick} className="btn btn-sm bg-dark text-light rounded-pill">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="my-1">Your Notes</h2>
        <div className="row">
          {filteredData.map((element) => {
            return <div key={element.id} className="col-md-4">
              <Card title={element.title} editnote={editnote} description={element.description} tag={element.tag} note={element} />
            </div>
          })}
        </div>
      </div>
    </>
  );
}
