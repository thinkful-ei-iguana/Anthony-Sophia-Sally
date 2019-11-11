import React from 'react';
import './App.css';
import Contact from './components/contact';
import Education from './components/education';
import Employment from './components/employment';
import Header from './components/header';

function App() {
  return (
    <div className="main-app">
      <Header />
      <Contact />
      <Education />
      <Employment />
    </div>
  );
}

export default App;
