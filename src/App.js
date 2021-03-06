import React, { useState } from 'react';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';
import Footer from './components/Footer/footer'
function App() {

  const [currentPage, setPageChange] = useState('About');


  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} setPageChange={setPageChange} />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
