import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizTitle.module.scss';

const QuizTitle = (props) => {
  const { title, step } = props;

  return (
    <h3 className={styles.title}>{step + 1}. {title}</h3>
  );
};

QuizTitle.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default QuizTitle;
