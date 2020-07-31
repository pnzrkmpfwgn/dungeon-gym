import React from 'react';

import classes from './Price.module.css';

import {useSpring, animated} from 'react-spring';

import {useHistory} from 'react-router-dom';

const Price = ({data, isEnglish}) => {
  const history = useHistory();

  const historyHandler = () => {
    history.push('/contact');
  };
  const animation = useSpring({
    from: {opacity: 0, transform: 'translate3d(-50px,0,0)'},
    to: {opacity: 1, transform: 'translate3d(0px,0,0)'},
  });
  return (
    <>
      {data.map((d, i) => {
        return (
          <animated.div
            onClick={() => historyHandler()}
            style={animation}
            key={i}
            className={classes.card}
          >
            {' '}
            <p className={classes.spec}>
              {d.month} {isEnglish ? 'Month' : 'Ay'}{' '}
            </p>
            <p className={classes.desc}> {d.price} &#8378; </p>
            <p className={classes.desc}> {d.desc} </p>
          </animated.div>
        );
      })}
    </>
  );
};

export default Price;
