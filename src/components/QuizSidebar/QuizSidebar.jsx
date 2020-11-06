import React from 'react';
import styles from './QuizSidebar.module.scss';

/* eslint-disable */
const QuizSidebar = (props) => (
  <div className={styles.sidebar}>
    {props.children}
  </div>
);

export default QuizSidebar;
