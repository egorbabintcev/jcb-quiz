import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizSidebar.module.scss';

const QuizSidebar = (props) => {
  const { hint } = props;

  return (
    <div className={styles.sidebar}>
      <div className={styles.avatar}>
        <img src="" alt="" />
        <div>
          <h4>Андрей</h4>
          <p>Директор по маркетингу</p>
        </div>
      </div>
      {
        hint.length !== 0 && <p className={styles.hint}>{hint}</p>
      }
    </div>
  );
};

QuizSidebar.propTypes = {
  hint: PropTypes.string.isRequired,
};

export default QuizSidebar;
