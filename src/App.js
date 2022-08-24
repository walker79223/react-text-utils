import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeClass = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-secondary')
  }


  const toggleMode = (cls) => {
    console.log(cls);

    if (cls === 'secondary') {
      setMode('secondary')
      removeClass()
      document.body.classList.add(`bg-${cls}`)
      showAlert('secondary', 'Hello')
    }
    if (cls === 'danger') {
      setMode('danger')
      removeClass()
      document.body.classList.add(`bg-${cls}`)
    }
    if (mode === 'primary') {
      setMode('primary')
      removeClass()
      document.body.classList.add(`bg-${cls}`)
    }
    if (mode === 'light') {
      setMode('light')
      removeClass()
      document.body.classList.add(`bg-${cls}`)
    }

    if (mode === 'warning') {
      setMode('warning')
      removeClass()
      document.body.classList.add(`bg-${cls}`)
    }

  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm heading='Enter text below' mode={mode} showAlert={showAlert} />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
