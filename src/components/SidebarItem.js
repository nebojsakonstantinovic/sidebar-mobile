import React, { Component } from 'react';

import './Components.css';

class SidebarItem extends Component {

  state = {
    isHovered: false,
  }

  onMouseEnter = () => {
    this.setState({ isHovered: true })
  }

  onMouseLeave = () => {
    this.setState({ isHovered: false })
  }

  renderSubItems() {
    const { isHovered } = this.state;
    const { active, children, title, expanded, } = this.props;
    if (!children) return null;
    if (active && expanded) return <ul className="list-group p-0 ">{children}</ul>;
    if (isHovered) {
      // *********************************
      if (expanded) {
        return <ul className="list-group p-0 custom-ul subItemsToSide">{children}</ul>;
        // style={{ position: 'absolute', left: '100%', top: 0 }}
      } else {
        return (
          <ul className="list-group p-0 custom-ul subItemsToSide">
            <li className="mt-0 list-group-item p20 bgBlack text-white">{title}</li>
             {/* border */}
            {children}
          </ul>
        );
      }
    }
  }

  setIconAndTitle() {
    const { expanded, onClick, icon, title, active } = this.props
    if (expanded && title) {
      return (
        <div className={`d-flex 100w liItem lin2 ${active ? 'actv actv2' : null}`} onClick={onClick}>
          <div className="w30 p20 text-center">
            <i className={icon}></i>
          </div>
          <div className="w70 p20 text-left">
            {title}
          </div>
        </div>
      )
    } else {
      return (
        <div className={`liItem ${active ? 'actv actv2' : null}`} onClick={onClick}>
          <div>
            <div className="w802 m-auto p20 text-center">
              <div className=" text-center" >
                <i className={icon}></i>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { active } = this.props;
    return (
      <li className={`list-group-item p-0 ${active ? 'actv' : null}`}>
        <div style={{ position: 'relative', color: '#FFF', }} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {this.setIconAndTitle()}
          {this.renderSubItems()}
        </div>
      </li>
    )
  }
}

export default SidebarItem;

