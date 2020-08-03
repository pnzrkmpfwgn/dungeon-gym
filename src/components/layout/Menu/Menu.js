import React from 'react';
import {bool} from 'prop-types';
import {StyledMenu} from './Menu.styled';
import Logo from '../../../images/Logo2.png';

//router
import {Link} from 'react-router-dom';

const Menu = ({open, setOpen, language}) => {
  return (
    <StyledMenu open={open}>
      {' '}
      <Link
        title={language ? 'Main Page' : 'Anasayfa'}
        to='/'
        onClick={() => setOpen(!open)}
      >
        <img src={Logo} alt='Dungeon Gym' />
      </Link>
      <Link
        className='link'
        onClick={() => setOpen(!open)}
        title={language ? 'Basic Exercise' : 'Temel Egzersiz'}
        to='/basic-exercise'
      >
        {' '}
        {language ? ' BASIC EXERCISE' : 'TEMEL EGZERSİZ'}{' '}
      </Link>
      <Link
        className='link'
        onClick={() => setOpen(!open)}
        to={'/membership'}
        title={language ? 'Membership' : 'Üyelik'}
      >
        {' '}
        {language ? 'MEMEBERSHIP' : 'ÜYELİK'}{' '}
      </Link>
      <Link
        className='link'
        onClick={() => setOpen(!open)}
        to='/contact'
        title={language ? 'Contact' : 'İletişim'}
      >
        {' '}
        {language ? ' CONTACT' : 'İLETİŞİM'}{' '}
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  language: bool.isRequired,
};

export default Menu;
