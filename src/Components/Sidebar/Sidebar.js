import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../../data/constants';

import {connect} from 'react-redux';
import { closeSidebar } from '../../store/actions/ui';
import { selectSidebar } from '../../store/selectors/ui.selector';

const Sidebar = ({isSidebarOpen,closeSidebar}) => {

  return (
    <aside className={isSidebarOpen ? 'sidebar sidebar--show' : 'sidebar'}>
      <div className="sidebar__header">
        <h2>Armin</h2>
        <button onClick={closeSidebar} className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar__links">
        {links.map((link) => {
          const { id, name, url } = link;
          return (
            <li key={id}>
              <Link to={url} data-link={name} onClick={closeSidebar}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

const mapStateToProps = (state) => ({
  isSidebarOpen : selectSidebar(state)
})

const mapDispatchToProps = (dispatch) => ({
  closeSidebar : () => dispatch(closeSidebar())
})

export default connect(
  mapStateToProps,mapDispatchToProps
)(Sidebar);