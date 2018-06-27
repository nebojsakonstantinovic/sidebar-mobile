import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Sidebar } from './';

class Layout extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'blue' }}>
        <div style={{ display: 'inline-flex w100', }}>
          <Navbar />
        </div>
        <div className="d-inline-flex bg-success" style={{ flexGrow: 1 }}>
          <Sidebar />
          <div className="d-inline-flex bg-danger px-4" style={{ flexGrow: 1 }}>
            {children}
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const { isMobile } = state.app;
  return { isMobile };
};

export default connect(mapStateToProps)(Layout);