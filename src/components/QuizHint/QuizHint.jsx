import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuizHint.module.scss';
import avatar from './avatar.png';

/* eslint-disable */
const QuizHint = (props) => {
  const { hint } = props;

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
      <div data-testid="hint-wrapper" dangerouslySetInnerHTML={{ __html: hint }} className={styles.hint}>
      </div>
      <a href="#" className={styles.link}>Получить консультацию</a>
    </div>
  );
};

QuizHint.propTypes = {
  hint: PropTypes.string,
};

QuizHint.defaultProps = {
  hint: '',
};

export default QuizHint;
