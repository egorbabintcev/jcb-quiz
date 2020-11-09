import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './QuizProgress.module.scss';

const QuizProgress = (props) => {
  const { step, length, isFinished } = props;
  const percentage = Math.round(((step + 1) / length) * 100) - 10;

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        {
          !isFinished
            ? `Шаг ${step + 1} из ${length}`
            : 'Завершено'
        }
      </p>
      <div className={styles.bar}>
        <div
          className={cx(styles.barline, { [styles.barline_finished]: isFinished })}
          style={{ width: `${isFinished ? '100' : percentage}%` }}
        />
      </div>
    </div>
  );
};

QuizProgress.propTypes = {
  step: PropTypes.number,
  length: PropTypes.number,
  isFinished: PropTypes.bool,
};

QuizProgress.defaultProps = {
  step: 0,
  length: 0,
  isFinished: false,
};

export default QuizProgress;
