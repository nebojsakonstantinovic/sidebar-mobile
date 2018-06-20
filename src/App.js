import React, { Component, Fragment } from 'react';
import './App.css';
import { Sidebar, Navbar, SidebarMobile } from './components';

class App extends Component {

  state = {
    barClass: "col-md-3",
    containerClass: "col-md-9",
    sidebarExpanded: true,
    height: window.innerHeight,
    width: window.innerWidth,
    toggle: false,
  };

  barfullClass = `${this.state.barClass} text-center bar p-0`
  containerfullClass = `${this.state.containerClass} text-center`

  updateSidebar = () => {
    this.setState({ sidebarExpanded: !this.state.sidebarExpanded })
  }

  //////////////////////////////

  componentDidMount = () => {
    //console.log(this.state.height);
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("resize", this.updateExpandedState);
  }

  updateExpandedState = () => {
    const { sidebarExpanded, width } = this.state;
    console.log("method", sidebarExpanded);

    if (width < 600) {
      this.setState({ sidebarExpanded: false })
    }
    if (width > 650) {
      this.setState({ sidebarExpanded: true })
    }
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("resize", this.this.updateExpandedState);
  }

  //////////////////////////



  ////////////////////////////////////////////////////////????



  render() {
    console.log(this.state.width);

    const { sidebarExpanded, } = this.state;
    let sidebarClass, containerClass;
    if (sidebarExpanded) {
      sidebarClass = 'w200px';
      containerClass = 'vw-w200px';
    } else {
      sidebarClass = 'w90px';
      containerClass = 'vw-w90px';
    }

    const { toggle } = this.state;

    let mobDesk
    const { width } = this.state;
    if (width > 400) {
      mobDesk =
        <div className="container-fluid height100 p-0">
          <div className="d-flex mx-0 height100">
            <div className={`${sidebarClass} text-center bar p-0`}>
              <Sidebar expanded={sidebarExpanded} onSidebarChange={this.updateSidebar} />
            </div>

            <div className={`${containerClass} text-center p-0`}>
              text
            </div>
          </div>
        </div>
    } else {
      mobDesk =
        <Fragment>
          <div className="dugme align-middle" onClick={() => this.setState({ toggle: !toggle })}>
            <i className={`${toggle ? "fas fa-times" : "fas fa-align-justify"} ikona`}></i>
          </div>

          {toggle ? <SidebarMobile /> : (<div>text</div>)}
        </Fragment>

    }



    return (
      <div className="App">
        <Navbar />
        {mobDesk}
      </div>
    );
  }
}

export default App;
