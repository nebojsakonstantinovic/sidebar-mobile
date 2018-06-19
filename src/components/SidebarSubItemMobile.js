import React from 'react';

const SidebarSubItemMobile = ({ title, onClick,parentActive }) => {
  return (
    <li className="mt-0 list-group-item p-0 d-flex justify-content-end liSubItem" onClick={onClick}>
      <div className="w80 p20 text-left">{title}</div>
    </li>
  )
}

export default SidebarSubItemMobile;