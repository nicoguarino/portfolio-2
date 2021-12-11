import React, { useState } from 'react';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import ContactForm from './components/Contact/contact';

function App() {


  return (
    <div>
      <Nav />
      <main>
        <div>
          <About/>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
