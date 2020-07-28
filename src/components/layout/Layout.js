import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';

import Header from './../Header';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme';
import {GlobalStyles} from '../global';

const Layout = ({children}) => {
  const [size, setSize] = useState(document.body.clientWidth);

  useEffect(() => {
    const onResize = (e) => {
      setSize(e.target.outerWidth);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [size]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <div>
          <GlobalStyles />
          <Header />
          <main>{children}</main>
          <footer>&#xa9; Ülkü Ayberk Yiğit</footer>
        </div>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
