import React from 'react';
import classes from './NavigationItem.module.css'

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
      <a href="{prop.link}"
        className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem