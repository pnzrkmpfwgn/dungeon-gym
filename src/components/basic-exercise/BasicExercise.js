import React, {useContext} from 'react';

//styles
import classes from './BasicExercise.module.css';

//component
import Exercise from './exercise/Exercise';

//context
import {ThemeContext} from '../../App';

//Data
import {dataEN, dataTR} from './data';

//spring
import {useSpring, animated} from 'react-spring';

//useOnScreen custom hook
import useOnScreen from '../../utils/useOnScreen';

const BasicExercise = () => {
  const isEnglish = useContext(ThemeContext);
  const [ref, visible] = useOnScreen({rootMargin: '-100px'});

  const animation = useSpring({
    from: {opacity: 0},
    to: async (next) => {
      if (visible) {
        await next({opacity: 1});
      }
    },
  });

  return (
    <animated.div ref={ref} style={animation} className={classes.container}>
      {isEnglish ? (
        <div>
          <Exercise exercises={dataEN} />
        </div>
      ) : (
        <div ref={ref}>
          <Exercise exercises={dataTR} />
        </div>
      )}
    </animated.div>
  );
};

export default BasicExercise;
