import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ deployedWebsite }) => {
  
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Boot Camp Blues',
      deployedWebsite: 'https://evening-cliffs-89328.herokuapp.com/',
      gitRepo: 'https://github.com/cclund444/bootcampblues.git',
    },
    {
      name: 'Budget Tracker',
      deployedWebsite: 'https://guarded-mountain-60579.herokuapp.com/',
      gitRepo: 'https://github.com/nicoguarino/budget-tracker.git',
    },
    {
      name: 'Daily Moods',
      deployedWebsite: 'https://nicoguarino.github.io/dailymoods/',
      gitRepo: 'https://github.com/nicoguarino/dailymoods.git',
    },
    {
      name: 'Just a Tech Blog',
      deployedWebsite: 'https://gentle-brushlands-46188.herokuapp.com/',
      gitRepo: 'https://github.com/nicoguarino/tech-blog.git',
    },
    {
      name: 'Note Taker',
      deployedWebsite: 'https://nicoguarino-note-taker.herokuapp.com/notes',
      gitRepo: 'https://github.com/nicoguarino/note-taker.git',
    },
    {
      name: 'Workday Scheduler',
      deployedWebsite: 'https://nicoguarino.github.io/workday-scheduler/',
      gitRepo: 'https://github.com/nicoguarino/workday-scheduler.git',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.deployedWebsite === deployedWebsite);
 

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}

      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/portfolioPhotos/${i}.PNG`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
            deployedWebsite= {image.deployedWebsite}
            gitRepo={image.gitRepo}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
