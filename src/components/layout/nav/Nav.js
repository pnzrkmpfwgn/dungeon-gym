import React, {useContext} from 'react';
import Logo from '../../../images/Logo2.png';
import classes from './Nav.module.css';

import {Link} from 'react-router-dom';

import {ThemeContext} from '../../../App';

const Nav = () => {
  const isEnglish = useContext(ThemeContext);
  return (
    <nav className={classes.navigation}>
      <div>
        <Link title={isEnglish ? 'Main Page' : 'Anasayfa'} to='/'>
          <img className={classes.logo} src={Logo} alt='Dungeon Gym' />
        </Link>
      </div>
      <div className={classes.listContainer}>
        <ul className={classes.list}>
          <li>
            <Link
              title={isEnglish ? 'Basic Exercise' : 'Temel Egzersiz'}
              className={classes.link}
              to='/basic-exercise'
            >
              {isEnglish ? 'BASIC EXERCISE' : 'TEMEL EGZERSİZ'}
            </Link>
          </li>
          <li>
            <Link
              title={isEnglish ? 'Membership' : 'Üyelik'}
              className={classes.link}
              to='/membership'
            >
              {isEnglish ? 'MEMBERSHIP' : 'ÜYELİK'}
            </Link>
          </li>
          <li>
            {' '}
            <Link
              title={isEnglish ? 'Contact' : 'İletişim'}
              className={classes.link}
              to='/contact'
            >
              {' '}
              {isEnglish ? 'CONTACT' : 'İLETİŞİM'}{' '}
            </Link>{' '}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
