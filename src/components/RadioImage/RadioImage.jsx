import React from 'react';
import { observer } from 'mobx-react';
import styles from './RadioImage.module.scss';

/* eslint-disable global-require */
const RadioImage = observer((props) => {
  const {
    answer: {
      id,
      title,
      isChecked,
      imgSrc = 'unknown.png',
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
      <div className={styles.wrapper}>
        <span className={styles.radio} />
        <img className={styles.image} src={`${process.env.PUBLIC_URL}/img/${imgSrc}`} alt="" />
        <span className={styles.bg} />
      </div>
      <h4 title={title} className={styles.text}>{title}</h4>
    </label>
  );
});

export default RadioImage;
