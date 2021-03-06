import React, { useEffect } from 'react';
import "../../../src/index.css"

function Nav(props) {

    const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];

    useEffect(() => {
        document.title = "Nico Guarino's Portfolio";
    });


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/portfolio-2/">
                    Nico Guarino's Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {tabs.map(tab => (
                        <li className='mx-2' key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => {
                                    props.setPageChange(tab)
                                }}
                                className={
                                    props.currentPage === tab ? 'nav-link navActive' : 'nav-link'
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
}

export default Nav;