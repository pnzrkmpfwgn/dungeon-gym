import React, {useContext} from 'react';
import Logo from '../../images/Logo.png';

//styles
import classes from './MainPage.module.css';

import Anime from 'react-anime';

//Router
import {Link} from 'react-router-dom';

//context
import {ThemeContext} from '../../App';

const MainPage = () => {
  const isEnglish = useContext(ThemeContext);

  return (
    <div className={classes.container}>
      {' '}
      <Anime
        duration={2000}
        delay={(el, index) => index * 1500}
        opacity={[0, 1]}
        translateX={[-100, 0]}
      >
        <img className={classes.logo} src={Logo} alt='logo' />{' '}
        <h1 className={classes.heading1}>
          {' '}
          {isEnglish
            ? '"No pain, no gain..."'
            : '"Acı yoksa, kazanç yok..."'}{' '}
        </h1>
        <h2 className={classes.heading2}>
          {' '}
          {isEnglish ? 'Welcome everyone!' : ' Hepiniz hoşgeldiniz!'}{' '}
        </h2>
        <p className={classes.paragraph}>
          {' '}
          {isEnglish
            ? 'In the Dungeon Gym, greet your better self! Leave your worries and insecurities behind and push it to the limits! Come on join us! But before that:'
            : "Dungeon spor salonuyla daha iyi bir 'sen'e merhaba de. Sıkıntılarını arkanda bırak ve limitlerini keşfet! Hadi bize katıl! Ama ondan önce:"}{' '}
        </p>
        <div className={classes.btn_container}>
          <p>
            {' '}
            <Link className={classes.btn} to='/basic-exercise'>
              {' '}
              {isEnglish ? "Let's Warm Up " : 'Hadi Isınalım!'}{' '}
            </Link>
          </p>
        </div>
      </Anime>
    </div>
  );
};

export default MainPage;
