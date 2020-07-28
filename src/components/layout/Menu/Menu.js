import React from 'react';
import {bool} from 'prop-types';
import {StyledMenu} from './Menu.styled';
import Logo from '../../../images/Logo2.png';

//router
import {Link} from 'react-router-dom';

const Menu = ({open, language}) => {
  return (
    <StyledMenu open={open}>
      <Link to='/'>
        {' '}
        <img src={Logo} alt='' />
      </Link>
      <a href='/basic-exercise'>
        {' '}
        {language ? ' BASIC EXERCISE' : 'TEMEL EGZERSİZ'}{' '}
      </a>
      <a href='/membership'> {language ? 'MEMEBERSHIP' : 'ÜYELİK'} </a>
      <a href='/contact'> {language ? ' CONTACT' : 'İLETİŞİM'} </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  language: bool.isRequired,
};

export default Menu;
