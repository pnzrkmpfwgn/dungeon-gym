import React from 'react';
import classes from './footer.module.css';
const Footer = () => {
  const date = new Date();
  return (
    <footer className={classes.test}>
      {' '}
      &#xa9; Ülkü Ayberk Yiğit {date.getFullYear()}{' '}
    </footer>
  );
};

export default Footer;
