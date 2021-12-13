# Nico Guarino Portfolio

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Nico Guarino's Portfolio-2 website is designed to display current and future work. It has a simplistic layout that displays homework and class projects, contact page, and a current resume. It gives a brief background on the creator and provides contact information to best reach him.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/portfolio.git)
* [Nico Guarino Portfolio Website URL](https://nicoguarino.github.io/portfolio-2/)

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/portfolio-2/blob/main/images/sample_code.PNG?raw=true "Sample Code")

### Sample Code
```JSX Sample
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
```

```CSS Sample
.navActive {
  color: var(--secondary);
}

iframe {
  width: 45%;
  height: 850px;
}

.footer{
  font-size: 25px;
  background: #181818;
  width: 100%;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  margin: auto;
  padding: auto;
}

.footer-content{
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
}

.footer-a{
  font-size: 25px;
}

.contact-container {
  text-align: center;
}

.form-control {
  width: 50% !important;
}
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino

## Contributing <a name = "contributing"></a>

Nico Guarino's portfolio-2 website is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Nico Guarino