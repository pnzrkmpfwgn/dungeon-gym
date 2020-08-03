import React, {useContext, Fragment, useEffect} from 'react';

//styles
import classes from './Membership.module.css';

//animation
import {useSpring, animated} from 'react-spring';

//context
import {ThemeContext} from '../../App';

//Component
import Price from './price/Price';

//data
import {pricesEN, pricesTR} from '../../data/data';

import {HelmetProvider, Helmet} from 'react-helmet-async';

const MemberShip = () => {
  const isEnglish = useContext(ThemeContext);
  const animation = useSpring({
    from: {opacity: 0, transform: 'translate3d(-10px,0,0)'},
    to: async (next, stop) => {
      next({opacity: 1, transform: 'translate3d(0px,0,0)'});
      stop();
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <link rel='canonical' href='https://dungeon-gym.com/membership' />
          <title> {isEnglish ? 'Membership' : 'Üyelik'} </title>
          <meta
            name='description'
            content={
              isEnglish
                ? 'To learn more about membership plans.'
                : 'Üyelik planları hakkında dahası.'
            }
          />
        </Helmet>
      </HelmetProvider>
      <div className={classes.container}>
        <animated.h1 className={classes.heading} style={animation}>
          {' '}
          {isEnglish ? 'Membership Pricings' : 'Üyelik Fiyatları'}{' '}
        </animated.h1>
        {isEnglish ? (
          <Price data={pricesEN} isEnglish={isEnglish} />
        ) : (
          <Price data={pricesTR} />
        )}
      </div>
    </Fragment>
  );
};

export default MemberShip;
