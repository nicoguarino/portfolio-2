import React, { useState } from 'react';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';

function App() {
   
   const [currentPage, handlePageChange] = useState('About');

   
   const renderPage = () => {
     switch (currentPage) {
       case 'About':
         return <About />;
       case 'Portfolio':
         return <Portfolio/>;
       case 'Contact':
         return <Contact />;
       default:
         return <About />;
     }
   };

  return (
    <div>
      <Nav urrentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
      <div>{renderPage(currentPage)}</div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
