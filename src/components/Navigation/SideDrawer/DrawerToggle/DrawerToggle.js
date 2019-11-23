import React from 'react';
import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
  <div
    className={classes.DrawerToggle}
    onClick={props.clicked}
  >
    <div>a</div>
    <div>b</div>
    <div>c</div>
  </div>
);

export default DrawerToggle;

/*
The empty div are styled in the css file

*/