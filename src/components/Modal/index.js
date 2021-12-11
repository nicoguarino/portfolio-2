import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { name, deployedWebsite, gitRepo, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/portfolioPhotos/${index}.PNG`).default} alt={name} />
                <center>
                <div><a href={deployedWebsite}>Deployed Website</a></div>
                
                <div><a href={gitRepo}>GitHub Repo</a></div>
               
                <button onClick={onClose} type="button">Close</button>
                </center>
            </div>
        </div>
    );
}

export default Modal;