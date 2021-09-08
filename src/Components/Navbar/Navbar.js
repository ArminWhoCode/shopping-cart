import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import { links } from '../../data/constants';

import {connect} from 'react-redux';
import { openSidebar } from '../../store/actions/ui';
import CartIcon from '../CartIcon/CartIcon';

const Navbar = ({openSidebar}) => {

  const [scroll, setScroll] = useState({ scrollY: 0, scrollHeight: false, scrollTop: false });
  const Nav = useRef(null)

  const scrollHandler = () => {
    setScroll((prevState) => ({
      scrollY: window.pageYOffset,
      scrollHeight: Nav.current.clientHeight < window.pageYOffset,
      scrollTop: window.pageYOffset < prevState.scrollY
    }))
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])


  return (
    <nav className={`nav ${scroll.scrollHeight ? (scroll.scrollTop ? 'sticky' : 'hide') : ''}`} ref={Nav}>
      <Link to='/'>
        <h3>Armin</h3>
      </Link>
      <div className="left">
        <ul className="nav__links">
          {links.map((link) => {
            const { id, name, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{name}</Link>
              </li>
            )
          })}
        </ul>
        <CartIcon />
        <button className='nav__toggle' onClick={openSidebar}>
          <FaBars />
        </button>

      </div>
    </nav>
  )
}


const mapDispatchToProps = (dispatch) => ({
  openSidebar: () => dispatch(openSidebar())
})

export default connect(
  null,mapDispatchToProps
)(Navbar);