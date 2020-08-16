import React from 'react';
import SideBar from './sidebar';
import SideBarMenu from './sidebar-menu';
import SideBarItem from './sidebar-item';
// import { SidebarGroup } from './sidebar-group';
import { ViewRoute } from '../../components/navigation/util';
import WorkView from '../../views/work/work-view';
import AboutView from '../../views/about/about-view';
import ResumeView from '../../views/resume/resume-view';

export function pageRoutes() {
  return [ViewRoute(WorkView), ViewRoute(AboutView), ViewRoute(ResumeView)];
}

const SideBarArea = () => {
  return (
    <SideBar>
      <SideBarMenu>
        <SideBarItem label=" Work" component={WorkView} />
        <SideBarItem label=" Email" component={AboutView} />
        <SideBarItem label=" Resume" component={ResumeView} />
      </SideBarMenu>
    </SideBar>
  );
};

export default SideBarArea;
