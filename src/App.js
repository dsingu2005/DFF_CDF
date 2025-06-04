import React from 'react';
import Navbar from './components/Navbar';
import MainStage from './components/MainStage';
import Workshops from './components/Workshops';
import GallerySessions from './components/GallerySessions';
import Concourse from './components/Concourse';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainStage />
      <Workshops />
      <GallerySessions />
      <Concourse />
      <Footer />
    </div>
  );
}

export default App;
