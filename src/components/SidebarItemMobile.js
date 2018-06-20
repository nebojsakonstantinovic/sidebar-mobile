import React, { Component } from 'react';

class SidebarItemMobile extends Component {

  renderSubItems() {
    const { active, children, } = this.props;
    if (!children) return null;
    if (active) return children;
  }

  setIconAndTitle() {
    const { onClick, icon, title, active } = this.props
    if (title) {
      return (
        <div className="d-flex w100 liSubItem" style={{backgroundColor: active ? '#000' : null}}  onClick={onClick}>
              <div className="w20 p20">
                <i className={icon}></i>
              </div>
              <div className="w80 p20 text-left">
                {title}
              </div>
        </div>
      )
    }
  }

  render() {
    const { title, onClick, expanded, active, icon } = this.props;
    return (
      <li className="list-group-item p-0">
        <div>
          {this.setIconAndTitle()}
          {this.renderSubItems()}
        </div>
      </li>
    )
  }
}

export default SidebarItemMobile;

