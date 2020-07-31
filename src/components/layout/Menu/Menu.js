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
      <Link to='/' onClick={() => setOpen(!open)}>
        <img src={Logo} alt='' />
      </Link>
      <Link
        className='link'
        onClick={() => setOpen(!open)}
        to='/basic-exercise'
      >
        {' '}
        {language ? ' BASIC EXERCISE' : 'TEMEL EGZERSİZ'}{' '}
      </Link>
      <Link className='link' onClick={() => setOpen(!open)} to='/membership'>
        {' '}
        {language ? 'MEMEBERSHIP' : 'ÜYELİK'}{' '}
      </Link>
      <Link className='link' onClick={() => setOpen(!open)} to='/contact'>
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
