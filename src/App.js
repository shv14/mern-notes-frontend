import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/noteState';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';


function App() {

  const [inputText, setInputText] = useState("");
  const search = (e) => {
    var text = e.target.value.toLowerCase();
    setInputText(text);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar title="Notes." search={search} Page1="Your Notes" />
          <Routes>
            <Route exact path="/about" element={<About input={inputText} />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/mern-notes-frontend" element={<Home input={inputText} />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
