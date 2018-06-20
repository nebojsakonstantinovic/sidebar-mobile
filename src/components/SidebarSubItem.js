import React from 'react';

const SidebarSubItem = ({ title, onClick, parentActive }) => {
  return (
    <li className="mt-0 list-group-item p-0" style={{ color: '#FFF', border: '1px solid #FFF', backgroundColor: '#CCc', }} onClick={onClick}>
      {parentActive
        ? (
          <div className="d-flex 100w justify-content-end" onClick={onClick}>
            <div className="w70 p20 text-left" style={{paddingLeft: '10px' ,borderLeft: parentActive ? '1px solid #FFF' : null}}>
              {title}
            </div>
          </div>
        )
        : <div className="text-left p20 pl-3">{title}</div>
      }
    </li>
  )
}

export default SidebarSubItem;

