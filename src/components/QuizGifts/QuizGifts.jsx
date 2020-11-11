import React from 'react';
import styles from './QuizGifts.module.scss';
import prices from './prices.png';
import gloves from './gloves.png';
import chat from './chat.png';

const QuizGifts = () => (
  <div className={styles.gifts}>
    <h4 className={styles.title}>Гарантированные подарки:</h4>
    <div className={styles.gifts_wrapper}>
      <div className={styles.gift}>
        <img src={prices} alt="" />
        <p className={styles.title}>
          <strong>3 варианта цены</strong>
          <br /> на оригинал, аналог или б/у
        </p>
      </div>
      <div className={styles.gift}>
        <img src={gloves} alt="" />
        <p className={styles.title}>
          <strong>Перчатки<br /> в подарок</strong>
        </p>
      </div>
      <div className={styles.gift}>
        <img src={chat} alt="" />
        <p className={styles.title}>
          <strong>Фото и видео запчастей</strong>
          <br /> пришлем в Whatsapp
        </p>
      </div>
    </div>
  </div>
);

export default QuizGifts;
