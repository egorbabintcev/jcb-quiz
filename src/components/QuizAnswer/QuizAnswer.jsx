import React from 'react';
import { observer } from 'mobx-react';
import styles from './QuizAnswer.module.scss';

const QuizAnswer = observer((props) => {
  const {
    id,
    title,
    checkAnswer,
    isChecked,
    type,
  } = props;

  return (
    <label className={styles.label} htmlFor={id}>
      <input
        className={styles.input}
        type={type}
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
});

export default QuizAnswer;
