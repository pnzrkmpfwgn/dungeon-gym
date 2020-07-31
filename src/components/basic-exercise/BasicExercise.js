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
        <Link to='/membership' className={classes.btn}>
          {' '}
          {isEnglish ? 'Membership' : 'Üyelik'}{' '}
        </Link>
      </p>
    </animated.div>
  );
};

export default BasicExercise;
