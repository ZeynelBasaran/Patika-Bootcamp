import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';

import './App.css'


function App() {
  //const [activeSearch, setActiveSearch] = useState(false)
  const [search, setSearch] = useState("")
  const [nextId, setNextId] = useState(1)
  const [editing, setEditing] = useState(false)
  const [newNote, setNewNote] = useState({
    id: nextId,
    text: "",
    color: ""
  })
  const [editNote, setEditNote] = useState({
    text: "",
    color: ""
  })
  const [notes, setNotes] = useState([])

  //New note için inputtan veri almak
  const newNoteİnp = (e) => {
    const { name, value } = e.target;
    setNewNote({
      ...newNote,
      [name]: value,
    })
  }
  //Toplanan verilerle new note içine atmak
  const addNewNote = () => {
    setNextId(nextId + 1)
    setNotes(prev => [...prev, newNote]
    )

    setNewNote({
      id: nextId + 1,
      text: "",
      color: ""
    })
  }


  //Edit tetik butonu aktif edip inputlara editlenen itemi atmak
  const editNoteFunc = (item) => {
    console.log(item.id)
    setEditing(prev => !prev)
    setEditNote(item)
  }
  //Editlenen inputlardan veri almak
  const changeNoteİnp = (e) => {
    const { name, value } = e.target;
    setEditNote({
      ...editNote,
      [name]: value,
    })
    console.log("edit", editNote)
  }
  //Filter ile Notları revize etmek
  const changeNote = () => {
    const filteredNotes = notes.filter((items) => items.id !== editNote.id);
    setNotes([...filteredNotes, editNote])
    setEditing(false)

  };
  //Serch inputa göre veri arama
  const searhFunc = (e) => {
    setSearch(e.target.value)
  }

  return (
    <main>
      <button></button>

      <div className="head">
        <h1>NotesApp</h1>
      </div>

      <div className='search'>
        <input type="text" placeholder='Search...' value={search} onChange={searhFunc} />
      </div>

      <div className='text'>
        <textarea name="text" value={editing ? editNote.text : newNote.text} onChange={editing ? changeNoteİnp : newNoteİnp}
        >
        </textarea>

        <div className='btns'>

          <input type="color" name='color' value={editing ? editNote.color : `${newNote.color}`} onChange={editing ? changeNoteİnp : newNoteİnp} />

          <button className='btn' onClick={editing ? changeNote : addNewNote} >{editing ? `CHANGE` : "ADD"}</button>

        </div>

      </div>
      <ul className='list'>
        {notes?.map((item, idx) => {
          if (item.text.toLowerCase().includes(search.toLowerCase())) {
            return <li key={idx} id={idx} style={{ backgroundColor: `${item.color}` }}>{<EditIcon onClick={() => { editNoteFunc(item) }} className='editİcon' />} <span>{item.text.slice(0, 15)}</span></li>
          }
        })

        }

      </ul>




    </main >
  )
}


export default App



