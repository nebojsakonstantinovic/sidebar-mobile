import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SidebarItem, SidebarSubItem } from './';
import menuItems from './MenuItems';
import './Components.css';
import './Responsive.css';

class Sidebar extends Component {

  state = {
    expanded: true,
  };

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { pathname } = this.props.location;
    const { expanded } = this.state;
    return (
      <ul className="list-group p-0 text-white dis-inline-flex" style={{ width: expanded ? '200px' : '90px' }}>
        {menuItems.map(({ icon, title, path, onClick, subItems = [] }, i) => {
          const itemActive = [path, ...subItems.map(si => si.path)].includes(pathname);
          return (
            <SidebarItem key={`menuItem_${i}`} expanded={expanded} icon={icon} title={title} active={itemActive} onClick={onClick}>
              {subItems.map(({ title, path, onClick }, j) => {
                const subItemActive = path === pathname;
                return <SidebarSubItem key={`menuItem_${i}_${j}`} title={title} parentActive={itemActive} active={subItemActive} onClick={onClick} />
              })}
            </SidebarItem>
          )
        })}
        <SidebarItem icon='fas fa-align-justify' onClick={this.toggleExpand} />
        <li className="text-white li-item text-center">{expanded ? 'EXPANDED' : 'MIN'}</li>
      </ul>
    );
  }
}

export default withRouter(Sidebar);
