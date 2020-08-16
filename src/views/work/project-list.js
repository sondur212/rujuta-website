import React from 'react';
import ProjectCard from './project-card';
import './project-content.scss';

const cardlist = [
  {
    image: 'kannada.png',
    cardlink: '/magazine',
    tags: ['Layout Design', 'Magazine'],
    title: 'Learning Kannada Through Virtual Reality',
    details:
      'Enriching the preview experience to facilitate conversation and create new feedback tools',
  },
  {
    image: 'arya.jpg',
    cardlink: '/facebook',
    tags: ['Design System', 'Internal Tool'],
    title: 'Helping Students In Course Signups',
    details:
      'Leading the vision for a more collaborative and dynamic workspace, presented at BoxWorks 2017',
  },
  {
    image: 'hi-cloth.png',
    cardlink: '/hicloth',
    tags: ['Mobile App'],
    title: 'An Expressive Cloth',
    details:
      'Unifying a fragmented sharing experience across Box to increase collaboration and promote security',
  },
  {
    image: 'magazinepictures/creativecrush.jpg',
    cardlink: '/time',
    tags: ['Data Visualization'],
    title: 'Collage - Magazine Design',
    details:
      'Leading the vision for a more collaborative and dynamic workspace, presented at BoxWorks 2017',
  },
  {
    image: 'memphis.png',
    cardlink: '/homeprice',
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
