import React, { useRef, useEffect, useContext, useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import "./header.css";
import { BASE_URL } from './../../utils/config';
import useFetch from "./../../hooks/useFetch";



import { AuthContext } from '../../context/AuthContext';

// const nav__links = [
//   {
//     path: '/home',
//     display: 'Home'
//   },
//   {
//     path: '/about',
//     display: 'About'
//   },
//   {
//     path: '/tours',
//     display: 'Tours',
//     dropdown: [
//       { path: '/tours/local', display: 'Local' },
//       { path: '/tours/international', display: 'International' },
//       { path: '/tours/trek', display: 'Trek' },
//       { path: '/tours/mountain', display: 'Mountain' }
//     ]
//   },
//   {
//     path: '/packages',
//     display: 'Packages',
//     dropdown: [
//       { path: '/packages/summer', display: 'Summer' },
//       { path: '/packages/winter', display: 'Winter' }
//     ]
//   },
//   {
//     path: '/country',
//     display: 'Country'
//   },
//   {
//     path: '/new-tour',
//     display: 'AddTour'
//   },
// ];
const Header = () => {


  const [nav__links, setNavLinks] = useState([
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '/about',
      display: 'About'
    },
    {
      path: '/tours',
      display: 'Tours',
      dropdown: [
        { path: '/tours/local', display: 'Local' },
        { path: '/tours/international', display: 'International' },
        { path: '/tours/trek', display: 'Trek' },
        { path: '/tours/mountain', display: 'Mountain' }
      ]
    },
    {
      path: '/packages',
      display: 'Packages',
      dropdown: [
        { path: '/packages/summer', display: 'Summer' },
        { path: '/packages/winter', display: 'Winter' }
      ]
    },
    {
      path: '/country',
      display: 'Destination',
      dropdown: [] // Initialize as empty; will be populated with countries
    }
  ]);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  console.log('usererer', user);
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/");
  };


  const { data: countries, loading, error } = useFetch(`${BASE_URL}/country`);


  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }


  useEffect(() => {
    if (countries) {
      const countryDropdown = countries.map(country => ({
        path: `/country/${country._id}`, // Assuming each country has an '_id' field for routing
        display: country.Name // Assuming 'Name' field is the country name
      }));

      console.log("dropdown", countryDropdown);
      // Update the navLinks state to include the fetched countries
      setNavLinks(prevLinks => prevLinks.map(link => {
        if (link.display === 'Country') {
          return { ...link, dropdown: countryDropdown };
        }
        return link;
      }));
    }

    // Add event listener for sticky header
    window.addEventListener('scroll', stickyHeaderFunc);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, [countries]);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');


  return (
    <>
      <div className="top-navbar">
        <ul class="social-icons list-inline pull-left">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-line"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
          </li>

          <li>
            <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-mail-line"></i>
            </a>
          </li>

          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="ri-whatsapp-line"></i>
            </a>
          </li>
        </ul>
        
        <ul class="contact-info list-inline pull-left">
          <li>
            <a href=""> <i class="ri-phone-line"></i>+9779808107091</a>
          {/* </li> */}


          {/* <li> */}
            <a href=""><i className="ri-mail-line"></i>
            info@fourbrotherstrek.com</a></li>

        </ul>

        <ul class="list-inline pull-right">
          <li>
            <button className="customize-trip-btn">Customize Trip</button>
          </li>
        </ul>
      </div>



      <header className='header' ref={headerRef}>
        <Container>
          <Row>
            <div className='nav__wrapper d-flex align-items-center justify-content-between'>
              { /* ========== logo ======== */}
              <div className="logo">
                <img src={logo} alt="" />

              </div>
              { /* ========== logo ======== */}
              { /* ========== menu start ======== */}
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>

                <ul className="menu d-flex align-items-center gap-5">
                  <span className="mobile__menu" onClick={toggleMenu}>
                    <i class="ri-menu-line"></i>
                  </span>
                  {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={navClass =>
                          navClass.isActive ? "active__link" : ""}
                      >
                        {item.display}
                        {item.dropdown && (
                          <i className="ri-arrow-down-s-line"></i> // Arrow down icon
                        )}
                      </NavLink>
                      {item.dropdown && (
                        <ul className="dropdown__menu">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavLink
                                to={subItem.path}
                                className={navClass =>
                                  navClass.isActive ? "active__link" : ""}
                              >
                                {subItem.display}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              { /* ========== menu end ======== */}
              <div className="nav_right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4">
                  {user ? (
                    <>
                      <h5 className="mb-0">{user.username}</h5>
                      <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                    </>
                  ) : (
                    <>
                      <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                      <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                    </>
                  )}



                </div>
                <span className="mobile__menu" onClick={toggleMenu}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>

      </header>
    </>

  );

};

export default Header;