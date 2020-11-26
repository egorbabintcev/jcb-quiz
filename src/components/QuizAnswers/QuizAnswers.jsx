import React from 'react';
import PropTypes from 'prop-types';
import Radio from 'src/components/Radio';
import RadioImage from 'src/components/RadioImage';
import styles from './QuizAnswers.module.scss';

const QuizAnswers = (props) => {
  const { answers, type, checkAnswer } = props;

  return (
    <div className={styles.list}>
      {answers.map((answer) => {
        switch (type) {
          case 'radio':
            return (
              <Radio
                key={answer.id}
                answer={answer}
                checkAnswer={checkAnswer}
              />
            );

          case 'pictureRadio':
            return (
              <RadioImage
                key={answer.id}
                answer={answer}
                checkAnswer={checkAnswer}
              />
            );
          default:
            return '';
        }
      })}
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
