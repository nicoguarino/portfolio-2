import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { name, deployedWebsite, gitRepo, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/portfolioPhotos/${index}.PNG`).default} />
                <a href={deployedWebsite}>Deployed Website</a>
                <a href={gitRepo}>GitHub Repo</a>
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;