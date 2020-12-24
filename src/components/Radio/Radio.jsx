import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

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

Radio.propTypes = {
  answer: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    isChecked: PropTypes.bool,
  }),
  checkAnswer: PropTypes.func,
};

Radio.defaultProps = {
  answer: {
    id: '',
    title: '',
    isChecked: false,
  },
  checkAnswer: () => {},
};

export default observer(Radio);
