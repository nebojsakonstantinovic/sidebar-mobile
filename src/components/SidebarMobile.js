import React, { Component } from 'react'
import { SidebarItemMobile, SidebarSubItemMobile } from './';
import './Components.css';
import './Responsive.css';


class SidebarMobile extends Component {

  state = {
    activeTab: null,
  };

  setActiveTab = (tab) => () => {
    const { activeTab } = this.state;
      this.setState({ activeTab: activeTab === tab ? null : tab })
  }


  render() {
    const { activeTab } = this.state;
    return (
      <ul className="list-group p-0 text-white crno">
      <SidebarItemMobile icon='fas fa-user'  title={'catalog'} active={activeTab === 'catalog'} onClick={this.setActiveTab('catalog')}>
        <ul className="list-group p-0">
          <SidebarSubItemMobile parentActive={activeTab === 'catalog'} title='products' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog'} title='cart routes' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog'} title='orders' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog'} title='modules' onClick={console.log} />
        </ul>
      </SidebarItemMobile>
      <SidebarItemMobile icon='fas fa-anchor'  title={'catalog2'} active={activeTab === 'catalog2'} onClick={this.setActiveTab('catalog2')}>
        <ul className="list-group p-0">
          <SidebarSubItemMobile parentActive={activeTab === 'catalog2'} title='products' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog2'} title='cart routes' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog2'} title='orders' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog2'} title='modules' onClick={console.log} />
        </ul>
      </SidebarItemMobile>
      <SidebarItemMobile icon='fas fa-anchor'  title={'catalog3'} active={activeTab === 'catalog3'} onClick={this.setActiveTab('catalog3')}>
        <ul className="list-group p-0">
          <SidebarSubItemMobile parentActive={activeTab === 'catalog3'} title='products' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog3'} title='cart routes' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog3'} title='orders' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog3'} title='modules' onClick={console.log} />
        </ul>
      </SidebarItemMobile>
      <SidebarItemMobile icon='fas fa-anchor'  title={'catalog4'} active={activeTab === 'catalog4'} onClick={this.setActiveTab('catalog4')}>
        <ul className="list-group p-0">
          <SidebarSubItemMobile parentActive={activeTab === 'catalog4'} title='products' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog4'} title='cart routes' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog4'} title='orders' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog4'} title='modules' onClick={console.log} />
        </ul>
      </SidebarItemMobile>
      <SidebarItemMobile icon='fas fa-anchor'  title={'catalog5'} active={activeTab === 'catalog5'} onClick={this.setActiveTab('catalog5')}>
        <ul className="list-group p-0">
          <SidebarSubItemMobile parentActive={activeTab === 'catalog5'} title='products' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog5'} title='cart routes' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog5'} title='orders' onClick={console.log} />
          <SidebarSubItemMobile parentActive={activeTab === 'catalog5'} title='modules' onClick={console.log} />
        </ul>
      </SidebarItemMobile>
    </ul>
    )
  }
}

export default SidebarMobile;