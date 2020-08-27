import React from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Content from './components/Content';
import Footer from './components/Footer';
import Database from './components/Database';
import './App.css';


function App() {
  return (
    <div className="App">
        

      
      <Header />
      <Content />
      <Buttons data={Database}/>
      <Footer />
    </div>
  );
}

export default App;
