import React from 'react';
import styles from './QuizBody.module.scss';

/* eslint-disable */
const QuizBody = (props) => (
  <div className={styles.step}>
    {props.children}
  </div>
);

export default QuizBody;
