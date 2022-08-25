import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Productos from './Components/Productos';
import About from './Components/About';
import Contact from './Components/Contact';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Productos/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
