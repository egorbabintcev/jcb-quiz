import React from 'react';
import PropTypes from 'prop-types';
import QuizAnswer from 'components/QuizAnswer';
import styles from './QuizAnswers.module.scss';

const QuizAnswers = (props) => {
  const { answers, type, checkAnswer } = props;

  return (
    <div className={styles.list}>
      {answers.map((answer) => (
        <QuizAnswer
          type={type}
          key={answer.id}
          id={answer.id}
          title={answer.title}
          checkAnswer={checkAnswer}
          isChecked={answer.isChecked}
        />
      ))}
    </div>
  );
};

QuizAnswers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isChecked: PropTypes.bool,
  })).isRequired,
  type: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired,
};

export default QuizAnswers;
