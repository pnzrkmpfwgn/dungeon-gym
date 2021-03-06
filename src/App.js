import React, {useState, Fragment, createContext} from 'react';
import Layout from './components/layout/Layout';

//Images
import Turkish from './images/Turkish.png';
import English from './images/English.png';

//Components
import MainPage from './components/main-page/MainPage';
import BasicExercise from './components/basic-exercise/BasicExercise';
import Membership from './components/membership/Membership';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import classes from './App.module.css';
import {Route, Switch} from 'react-router-dom';

export const ThemeContext = createContext();

function App() {
  //states
  const [isEnglish, setIsEnglish] = useState(false);
  return (
    <ThemeContext.Provider value={isEnglish}>
      <Fragment>
        {isEnglish ? (
          <img
            onClick={() => setIsEnglish(!isEnglish)}
            className={classes.flag}
            src={Turkish}
            alt='Turkish Flag'
            title='Türkçe'
          />
        ) : (
          <img
            onClick={() => setIsEnglish(!isEnglish)}
            className={classes.flag}
            src={English}
            alt='English Flag'
            title='English'
          />
        )}

        <Layout>
          {' '}
          <Switch>
            <Route path='/basic-exercise' exact component={BasicExercise} />
            <Route path='/membership' exact component={Membership} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/' component={MainPage} />
          </Switch>
          <Footer />
        </Layout>
      </Fragment>
    </ThemeContext.Provider>
  );
}

export default App;
