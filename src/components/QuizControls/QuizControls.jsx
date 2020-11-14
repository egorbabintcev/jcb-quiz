import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizControls.module.scss';
import arrow from './arrow.svg';

const QuizControls = (props) => {
  const {
    step,
    decStep,
    incStep,
    answers,
  } = props;
  const isNextDisabled = answers.every((answer) => !answer.isChecked);
  const isPrevDisabled = step === 0;

  return (
    <div className={styles.group}>
      <button
        className={styles.btn_prev}
        type="button"
        onClick={decStep}
        disabled={isPrevDisabled ? true : null}
      >
        <svg>
          <use xlinkHref={`${arrow}#arrow`} />
        </svg>
      </button>
      <button
        className={styles.btn_next}
        type="button"
        onClick={incStep}
        disabled={isNextDisabled ? true : null}
      >
        Далее
      </button>
    </div>
  );
};

QuizControls.propTypes = {
  step: PropTypes.number.isRequired,
  decStep: PropTypes.func.isRequired,
  incStep: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isChecked: PropTypes.bool,
  })).isRequired,
};

export default QuizControls;
