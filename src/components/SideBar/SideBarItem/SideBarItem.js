import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import './SideBarItem.scss';

const SideBarItem = ({ highlight, icon, label }) => {
  const Highlight = highlight ? 'highlight-item' : null;

  return (
    <Menu.Item className={['sidebar-item', Highlight].join(' ')} >
      <div className="sidebar-item-alignment-container">
        <span><Icon size='large' name={icon} /></span>
        <span>{label}</span>
      </div>
    </Menu.Item>
  )
}

export default SideBarItem;