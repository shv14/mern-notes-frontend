import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const noteInitial = [
        {
            "id": "1",
            "title": "First ",
            "description": "This is my first note",
            "tag": "Note"
        },
        {
            "id": "2",
            "title": "Second ",
            "description": "This is my second note",
            "tag": "Note"
        },
        {
            "id": "3",
            "title": "Third ",
            "description": "This is my third note",
            "tag": "Note"
        },
        {
            "id": "4",
            "title": "Fourth ",
            "description": "This is my fourth note",
            "tag": "Note"
        },
        {
            "id": "5",
            "title": "Fifth ",
            "description": "This is my fifth note",
            "tag": "Note"
        }
    ]

    const [note, setnotes] = useState(noteInitial);

    const getnotes = () => {
        setnotes(note)
    }

    const addnotes = (title, description, tag) => {
        const notes = {
            "id": "1",
            "title": title,
            "description": description,
            "tag": tag
        }
        setnotes(note.concat(notes))
    }

    const editnotes = (id, title, description, tag) => {

        let newnote = JSON.parse(JSON.stringify(note));
        for (let index = 0; index < newnote.length; index++) {
            const element = newnote[index]
            if (element.id === id) {
                newnote[index].title = title
                newnote[index].description = description
                newnote[index].tag = tag
            }
            break;
        }
        setnotes(newnote);
    }

    const deletenotes = (id) => {
        const newnote = note.filter((note) => { return note.id !== id })
        setnotes(newnote)
    }

    return <NoteContext.Provider value={{ note, addnotes, editnotes, deletenotes, getnotes }}>
        {props.children}
    </NoteContext.Provider>
}

export default NoteState