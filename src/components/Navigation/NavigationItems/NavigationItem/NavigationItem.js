import React from 'react';
import classes from './NavigationItem.module.css';

// Make BurgerBuilder and Checkout a link as list
const NavigationItem = ( props ) => (
  <li className={classes.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? classes.active : null}
    >
      {props.children}
    </a>
  </li>
);

export default NavigationItem;