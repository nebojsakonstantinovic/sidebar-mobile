import React, { Component } from 'react';

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
    const { active, children, title, expanded } = this.props;
    if (!children) return null;
    if (active && expanded) return children;
    if (isHovered) {
      if (expanded) {
        return <ul className="list-group p-0 custom-ul" style={{ position: 'absolute', left: '100%', top: 0 }}>{children}</ul>;
      } 
      // else if(!expanded && active) {

      // } 
      else {
        return (
          <ul className="list-group p-0 custom-ul" style={{ position: 'absolute', left: '100%', top: 0, }}>
            <li className="mt-0 list-group-item p20" style={{ color: '#FFF', border: '1px solid #FFF', backgroundColor: '#000' }}>{title}</li>
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
        <div className="d-flex 100w liItem"   onClick={onClick}>
          <div className="w30 p20 text-center">
            <i className={icon}></i>
          </div>
          <div className="w70 p20 text-left">
            {title}
          </div>
        </div>
        // style={{backgroundColor: `${ active ? '#000' : '#CCC' }`}}
      )
    } else {
      return (
        <div className="liItem" onClick={onClick}>
          <div>
            <div className="w802 m-auto p20 text-center">
              {/* <div style={{ borderRight: active ? '7px solid #FFF' : null, paddingRight: '7px' }}> */}
                <div className=" text-center" >
                  <i className={icon}></i>
                </div>
              </div>
            </div>
          </div>
        // </div>
      )
    }
  }

  render() {
    const { title, onClick, expanded, active, icon } = this.props;
    return (
      <li className="list-group-item p-0" onClick={(e) => console.log(e.nativeEvent)}>
        <div style={{ position: 'relative', color: '#FFF', border: `1px solid ${active ? '#FFF' : '#CCC'}`,  }} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {/* <div className="row" style={{ padding: '20px' }} onClick={onClick}>
            <div className="col-md-2 text-center">
              <i className={icon}></i>
            </div>
            <div className="col-md-10 text-left">
              {title}
            </div>
          </div> */}
          {this.setIconAndTitle()}
          {this.renderSubItems()}

        </div>
      </li>
    )
  }
}

export default SidebarItem;

