import React, { useState } from 'react';
import cx from 'classnames';
import styles from './QuizSubmitForm.module.scss';
import sprite from './social-icons.svg';

const QuizSubmitForm = () => {
  const [messenger, setMessenger] = useState('whatsapp');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Осталось оставить контакты</h3>
      <p className={styles.subtitle}>Укажите куда отправить:</p>
      <ul className={styles.list}>
        <li>Фотографии запчастей</li>
        <li>3 варианта цены на на оригинал, аналог или б/у</li>
      </ul>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <h3 className={styles.title}>Каким способом с вами связаться?</h3>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <div className={styles.group}>
            <label>
              <input type="radio" name="contact_type" value="whatsapp" defaultChecked onChange={(e) => setMessenger(e.target.value)} />
              <div className={styles.item}>
                <span className={cx(styles.bg, styles.whatsapp)} />
                <svg className={styles.icon}>
                  <use xlinkHref={`${sprite}#whatsapp`} />
                </svg>
                <span className={styles.text}>WhatsApp</span>
              </div>
            </label>
            <label>
              <input type="radio" name="contact_type" value="telegram" onChange={(e) => setMessenger(e.target.value)} />
              <div className={styles.item}>
                <span className={cx(styles.bg, styles.telegram)} />
                <svg className={styles.icon}>
                  <use xlinkHref={`${sprite}#telegram`} />
                </svg>
                <span className={styles.text}>Telegram</span>
              </div>
            </label>
            <label>
              <input type="radio" name="contact_type" value="вконтакте" onChange={(e) => setMessenger(e.target.value)} />
              <div className={styles.item}>
                <span className={cx(styles.bg, styles.vk)} />
                <svg className={styles.icon}>
                  <use xlinkHref={`${sprite}#vk`} />
                </svg>
                <span className={styles.text}>ВКонтакте</span>
              </div>
            </label>
            <label>
              <input type="radio" name="contact_type" value="viber" onChange={(e) => setMessenger(e.target.value)} />
              <div className={styles.item}>
                <span className={cx(styles.bg, styles.viber)} />
                <svg className={styles.icon}>
                  <use xlinkHref={`${sprite}#viber`} />
                </svg>
                <span className={styles.text}>Viber</span>
              </div>
            </label>
          </div>
        </div>
        <div>
          <h3 className={styles.title}>Введите контактные данные</h3>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <input className={styles.input} type="text" placeholder={`Введите ваш ${messenger}`} />
        </div>
        <div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <button type="submit" className={styles.btn}>Получить подбор запчасти + подарки</button>
          <label>
            <input type="checkbox" name="policy_agreement" required />
            <span className={styles.small}>
              Я даю разрешение на обработку моих персональных
              данных согласно правилам конфиденциальности
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default QuizSubmitForm;
