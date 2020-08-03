import React, {useContext, useEffect} from 'react';
import {ThemeContext} from '../../App';
import classes from './Contact.module.css';
import {useSpring, animated} from 'react-spring';

import {HelmetProvider, Helmet} from 'react-helmet-async';

const Contact = () => {
  const isEnglish = useContext(ThemeContext);
  const animation = useSpring({
    from: {opacity: 0, transform: 'translate3d(50px,0,0)'},
    to: {opacity: 1, transform: 'translate3d(0px,0,0)'},
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title> {isEnglish ? 'Contact' : 'İletişim'} </title>
          <meta
            name='description'
            content={
              isEnglish
                ? 'To contact with Dungeon Gym'
                : 'Dungeon Gym ile iletişim için'
            }
          />{' '}
          <link rel='canonical' href='https://www.dungeon-gym.com/contact' />
        </Helmet>
      </HelmetProvider>
      <animated.div style={animation} className={classes.container}>
        <h1> {isEnglish ? 'Contact Details' : 'İletişim Detayları'} </h1>
        <h3>
          {' '}
          {isEnglish ? 'Phone No.:' : 'Telefon No.:'}
          <span className={classes.spec}> 0533 849 86 31 </span>{' '}
        </h3>{' '}
        <h3>
          {' '}
          E-mail: <span className={classes.spec}>ahmetdgcn@gmail.com</span>{' '}
        </h3>
        <h4>
          {' '}
          Address:{' '}
          <span className={classes.spec}>
            {' '}
            İsmail Beyoğlu Caddesi no. 96a Küçük Kaymaklı{' '}
          </span>
        </h4>
      </animated.div>
    </>
  );
};

export default Contact;
