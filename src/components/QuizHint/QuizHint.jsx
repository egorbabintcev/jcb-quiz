import React from 'react';
// import PropTypes from 'prop-types';
import styles from './QuizHint.module.scss';
import avatar from './avatar.png';

/* eslint-disable */

const QuizHint = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.manager}>
        <div className={styles.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div>
          <h4>Дмитрий Садковский</h4>
          <p>
            Генеральный директор
            <br /> магазина <strong>Jcbdetal</strong>
          </p>
        </div>
      </div>
      <p className={styles.hint}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores natus laudantium, necessitatibus a quibusdam voluptas, sunt ut voluptatum veniam aliquam, eum similique. Ab aperiam exercitationem perferendis esse in sunt sapiente itaque amet voluptatem! Corporis, quos nobis quae expedita nostrum modi?
      </p>
    </div>
  );
};

// QuizHint.propTypes = {
//   hint: PropTypes.string,
// };

// QuizHint.defaultProps = {
//   hint: '',
// };

export default QuizHint;
