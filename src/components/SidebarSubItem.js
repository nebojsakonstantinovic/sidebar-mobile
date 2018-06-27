import React from 'react';


const SidebarSubItem = ({ title, active, parentActive, expanded, onClick }) => {
  return (
    <li className={`mt-0 list-group-item p-0 liItem hover  ${active ? 'actv' : null}`} style={{ color: '#FFF', border: '1px solid #FFF', }} onClick={onClick}>
      {parentActive && expanded
        ? (
          <div className="lin w100 d-flex justify-content-end">
            <div className="w70 p20 text-left" >
              {title}
            </div>
          </div>
        )
        : (
          <div className="text-left p20 pl-3">{title}</div>
        )
      }
    </li>
  )
}

export default SidebarSubItem;

// style={{paddingLeft: '10px' ,borderLeft: parentActive ? '1px solid #FFF' : null}}