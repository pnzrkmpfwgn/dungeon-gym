import React, {useState, useEffect, useRef, useContext} from 'react';

//utils
import {useOnClickOutside} from '../utils/hooks';

//Components
import Menu from './layout/Menu/Menu';
import Burger from './layout/burger/Burger';
import Nav from './layout/nav/Nav';

//Context
import {ThemeContext} from '../App';

const Header = () => {
  //Language context
  const language = useContext(ThemeContext);

  //Ref
  const node = useRef();

  //States
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(document.body.clientWidth);

  //Handlers
  useOnClickOutside(node, () => setOpen(false));

  //Effects
  useEffect(() => {
    const onResize = (e) => {
      setSize(e.target.outerWidth);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [size]);

  return (
    <>
      <div>
        {size > 768 ? (
          <Nav />
        ) : (
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu language={language} open={open} setOpen={setOpen} />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
