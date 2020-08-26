import React from 'react';
import { MainView } from '../../pages/main-view';
import ProjectHeader from './project-header';
import ProjectList from './project-list';
import ScrollToTop from './../../components/navigation/scroll-top';
// import ProjectFooter from './project-footer';

const WorkView = () => {
  return (
    <MainView>
      <ScrollToTop />
      <ProjectHeader />
      <ProjectList />
    </MainView>
  );
};

WorkView.Url = '/work';

export default WorkView;
