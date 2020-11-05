import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizProgress.module.scss';

const QuizProgress = (props) => {
  const { step, length } = props;
  const percentage = Math.round(((step + 1) / length) * 100) - 10;

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Готово: <strong className="highlighted">{percentage}%</strong>
      </p>
      <div className={styles.bar}>
        <div className={styles.barline} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

QuizProgress.propTypes = {
  step: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default QuizProgress;
