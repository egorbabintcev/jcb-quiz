import React from 'react';
import { observer } from 'mobx-react';
import styles from './Radio.module.scss';

/* eslint-disable react/prop-types */
const Radio = (props) => {
  const {
    answer: {
      id,
      title,
      isChecked,
    },
    checkAnswer,
  } = props;

  return (
    <label className={styles.label} htmlFor={id}>
      <input
        className={styles.input}
        type="radio"
        name="variant"
        id={id}
        onChange={checkAnswer.bind(null, id)}
        checked={isChecked}
      />
      <span className={styles.radio} />
      <span className={styles.bg} />
      <h4 title={title} className={styles.text}>{title}</h4>
    </label>
  );
};

export default observer(Radio);
