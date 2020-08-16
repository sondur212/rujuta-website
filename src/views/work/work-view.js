import React from 'react';
import { MainView } from '../../pages/main-view';
import ProjectHeader from './project-header';
import ProjectList from './project-list';
import ProjectFooter from './project-footer';

const WorkView = () => {
  return (
    <MainView>
      <ProjectHeader />
      <ProjectList />
      <ProjectFooter />
    </MainView>
  );
};

WorkView.Url = '/work';

export default WorkView;
