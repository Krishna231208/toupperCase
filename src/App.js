import React, { useState } from 'react';
import './Appa.css'; // Correct CSS import
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; // Fixed import
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#1d1e2a';
      setMode('dark');
      showAlert("Dark Mode has been enabled", "success");
    } else {
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      setMode('light');
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* Render TextForm component */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
