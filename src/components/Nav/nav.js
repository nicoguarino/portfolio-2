import React, { useEffect } from 'react';

function Nav(props) {
    const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];

    useEffect(() => {
        document.title = 'Nico Guarino Portfolio';
    });


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Nico Guarino Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {tabs.map(tab => (
                        <li className="mx-2" key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
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



