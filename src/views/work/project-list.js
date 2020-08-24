import React from 'react';
import ProjectCard from './project-card';
import './project-content.scss';
import kannadaImg from 'assets/images/kannada.png';
import aryaImg from 'assets/images/arya.jpg';
import hiclothImg from 'assets/images/hi-cloth.png';
import creativecrushImg from 'assets/images/magazinepictures/creativecrush.jpg';
import memphisImg from 'assets/images/memphis.png';

const cardlist = [
  {
    image: kannadaImg,
    cardlink: '/kannada',
    tags: ['Layout Design', 'Magazine'],
    title: 'Learning Kannada Through Virtual Reality',
    details:
      'Enriching the preview experience to facilitate conversation and create new feedback tools',
  },
  {
    image: aryaImg,
    cardlink: '/arya',
    tags: ['Design System', 'Internal Tool'],
    title: 'Helping Students In Course Signups',
    details:
      'Leading the vision for a more collaborative and dynamic workspace, presented at BoxWorks 2017',
  },
  {
    image: hiclothImg,
    cardlink: '/expressive',
    tags: ['Mobile App'],
    title: 'An Expressive Cloth',
    details:
      'Unifying a fragmented sharing experience across Box to increase collaboration and promote security',
  },
  {
    image: creativecrushImg,
    cardlink: '/collage',
    tags: ['Data Visualization'],
    title: 'Collage - Magazine Design',
    details:
      'Leading the vision for a more collaborative and dynamic workspace, presented at BoxWorks 2017',
  },
  {
    image: memphisImg,
    cardlink: '/memphis',
    tags: ['UX Research'],
    title: 'Memphis - An Animated Infograph',
    details:
      'Enriching the preview experience to facilitate conversation and create new feedback tools',
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
