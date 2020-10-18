import React from 'react';
import SideBar from './sidebar';
import SideBarMenu from './sidebar-menu';
import SideBarItem from './sidebar-item';
// import { SidebarGroup } from './sidebar-group';
import { ViewRoute } from '../../components/navigation/util';
import WorkView from '../../views/work/work-view';
import EmailView from '../../views/about/about-view';
import KannadaView from '../../views/kannada/kannada-view';
import ExpressiveView from '../../views/expressive/expressive-view';
import ResumeView from '../../views/resume/resume-view';
import MagazineView from '../../views/magazine/magazine-view';
import MemphisView from '../../views/memphis/memphis-view';
import AryaView from '../../views/arya/arya-view';
import LayoutView from '../../views/layout/layout-view';
import ForceChartView from '../../views/force-chart/forcechart-view';

export function pageRoutes() {
  return [
    ViewRoute(WorkView),
    ViewRoute(EmailView),
    ViewRoute(ResumeView),
    ViewRoute(MagazineView),
    ViewRoute(KannadaView),
    ViewRoute(ExpressiveView),
    ViewRoute(MemphisView),
    ViewRoute(AryaView),
    ViewRoute(LayoutView),
    ViewRoute(ForceChartView),
  ];
}

const SideBarArea = () => {
  return (
    <SideBar>
      <SideBarMenu>
        <SideBarItem label=" Work" component={WorkView} />
        {/*<SideBarItem label=" Email" component={EmailView} />*/}
        <SideBarItem label=" Resume" component={ResumeView} />
        <li className="sidebar-item">
          <div className="sidebar-item-content">
            <a href="mailto:rujuta.sondur@gmail.com?subject=Say%20Hi%20to%20Rujuta!">
              Email
            </a>
          </div>
        </li>
      </SideBarMenu>
    </SideBar>
  );
};

export default SideBarArea;
