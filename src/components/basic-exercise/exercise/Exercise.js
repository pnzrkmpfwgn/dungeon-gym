import React from 'react';

//styles
import classes from './Exercise.module.css';

//springs
//import {useSpring, useTrail, animated} from 'react-spring';

//custom hook for intersection observation
//import useOnScreen from '../../../utils/useOnScreen';

const Exercise = ({exercises}) => {
  return (
    <div className={classes.container}>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <h1 className={classes.heading}> {exercise.title} </h1>
          <img className={classes.image} src={exercise.image} alt='' />
          <ul>
            {exercise.desc.map((desc, i) => (
              <li className={classes.paragraph} key={i}>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
