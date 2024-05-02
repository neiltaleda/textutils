// import { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';


// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert=(message, type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     })

//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);

//   }

//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark Mode has been enabled", "success");
//       document.title = 'TextUtils - Dark Mode'
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light Mode has been enabled", "success");
//       document.title = 'TextUtils - Light Mode'
//     }
    
//   }
//   return (
//     <>
    


//       <Navbar title = "TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />


//       <Alert alert={alert} />


//       <div className="container my-3">
//         <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below" />
//         <About />

//       </div>

//       <Routes>
//         <Route path="/" element={<About />} />


//       </Routes>


//     </>
//   );
// }

// export default App;












import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
    
  }



  return (
    // <Router>
      <div>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below" />}
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    // </Router>
  );
}

export default App;