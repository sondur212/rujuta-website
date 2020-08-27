import React from 'react';
import ProjectCard from './project-card';
import './project-content.scss';
import kannadaImg from './../../../assets/images/kannada.png';
import aryaImg from './../../../assets/images/arya.jpg';
import hiclothImg from './../../../assets/images/hi-cloth.png';
import creativecrushImg from './../../../assets/images/magazinepictures/creativecrush.jpg';
import memphisImg from './../../../assets/images/memphis.png';

const cardlist = [
  {
    image: kannadaImg,
    cardlink: '/kannada',
    tags: ['UX Design'],
    title: 'Learning Kannada Through Virtual Reality',
    details:
      'Helping the daily commuters of the metro learn Kannada through Virtual Reality. The goal was to activate the metro station as a public space',
  },
  {
    image: aryaImg,
    cardlink: '/arya',
    tags: ['UX Design'],
    title: 'Helping Students In Course Signups',
    details:
      'An interactive chatbot called "Arya" that guides students through their yearly course sign ups',
  },
  {
    image: hiclothImg,
    cardlink: '/expressive',
    tags: ['3D Animation'],
    title: 'An Expressive Cloth',
    details:
      'Can objects communicate through emotions? This project looks into how would look like',
  },
  {
    image: creativecrushImg,
    cardlink: '/collage',
    tags: ['Visual Design'],
    title: 'Collage - Magazine Design',
    details:
      'A collection of articles that have been redesigned to do true justice to their content',
  },
  {
    image: memphisImg,
    cardlink: '/memphis',
    tags: ['Visual Design', 'Animation'],
    title: 'Memphis - An Animated Infograph',
    details:
      'An animated infograph detailing the suprisingly interesting history of the typeface - Memphis',
  },
];
const ProjectList = () => {
  const cards = cardlist.map((card, idx) => {
    return (
      <ProjectCard
        place={idx % 2 == 0 ? 'even' : 'odd'}
        key={idx}
        card={card}
      />
    );
  });
  return <div className="project-list">{cards}</div>;
};

export default ProjectList;
