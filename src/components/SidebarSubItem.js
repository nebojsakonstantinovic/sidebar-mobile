import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const SidebarSubItem = ({ title, onClick, parentActive, expanded, link, location }) => {
  console.log(location);
  return (
    <li className="mt-0 list-group-item p-0 liItem hover" style={{ color: '#FFF', border: '1px solid #FFF', }} onClick={onClick}>
      {/* backgroundColor: !parentActive ? '#CCc' : null, */}
      {parentActive && expanded
        ? (
          <div className="" onClick={onClick}>
            <Link className={`lin w100 d-flex justify-content-end ${location.pathname === link ? 'actv' : null}`} to={link}>
            <div className="w70 p20 text-left" >
              
                {title}
             
            </div>
            </Link>
          </div>
        )
        : <div className="text-left p20 pl-3">{title}</div>
      }
    </li>
  )
}

export default withRouter(SidebarSubItem);

// style={{paddingLeft: '10px' ,borderLeft: parentActive ? '1px solid #FFF' : null}}