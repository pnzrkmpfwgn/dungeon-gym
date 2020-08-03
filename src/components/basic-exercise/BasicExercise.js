import React, {useContext, useEffect} from 'react';

//styles
import classes from './BasicExercise.module.css';

//component
import Exercise from './exercise/Exercise';

//context
import {ThemeContext} from '../../App';

//Data
import {dataEN, dataTR} from '../../data/data';

//spring
import {useSpring, animated} from 'react-spring';

//react-router-dom
import {Link} from 'react-router-dom';

import {Helmet, HelmetProvider} from 'react-helmet-async';

const BasicExercise = () => {
  const isEnglish = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const animation = useSpring({
    from: {opacity: 0, transform: 'translate3d(-30px,0,0)'},
    to: {opacity: 1, transform: 'translate3d(0px,0,0)'},
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{isEnglish ? 'Basic Exercise' : 'Temel Egzersiz'}</title>
          <meta
            name='description'
            content={
              isEnglish
                ? 'Basic exercises to get you started'
                : 'Başlamanız için temel egzersizler.'
            }
          />
          <link
            rel='canonical'
            href='https://www.dungeon-gym.com/basic-exercise'
          />
        </Helmet>
      </HelmetProvider>
      <animated.div style={animation} className={classes.container}>
        {isEnglish ? (
          <div>
            <Exercise exercises={dataEN} />
          </div>
        ) : (
          <div>
            <Exercise exercises={dataTR} />
          </div>
        )}
        <p>
          {' '}
          <Link
            to='/membership'
            title={isEnglish ? 'Membership' : 'Üyelik'}
            className={classes.btn}
          >
            {' '}
            {isEnglish ? 'Membership' : 'Üyelik'}{' '}
          </Link>
        </p>
      </animated.div>
    </>
  );
};

export default BasicExercise;
