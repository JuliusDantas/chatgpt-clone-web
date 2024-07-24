import React from 'react'
import './Sidemenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const SideMenu = ()=> {
  return(
    <aside className='sidemenu'>
      <div className='sidemenu-button'>
        Novo chat
        <span><FontAwesomeIcon icon={faPlus} /></span>
        
      </div>
    </aside>
  )
}

export default SideMenu