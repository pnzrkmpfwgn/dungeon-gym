import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../App';
import classes from './Contact.module.css';
import {useSpring, animated} from 'react-spring';

import {HelmetProvider, Helmet} from 'react-helmet-async';
import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api';

import {API_KEY} from '../../config/API_KEY';

const Contact = () => {
  const [size, setSize] = useState(document.body.clientWidth);

  useEffect(() => {
    const onResize = (e) => {
      setSize(document.body.clientWidth);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [size]);

  const coordinates = {
    lat: 35.200334,
    lng: 33.375333,
  };
  const mapStyle = {
    height: '50vh',
    width: size > 768 ? '50%' : size < 768 && '100%',
    marginRight: '10px',
  };
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
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyle}
            className={classes.map}
            zoom={18}
            center={coordinates}
          >
            <Marker position={coordinates}></Marker>
          </GoogleMap>
        </LoadScript>
      </animated.div>
    </>
  );
};

export default Contact;
