import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Store from 'src/Stores/Store';
import QuizBody from 'src/components/QuizBody';
import QuizSidebar from 'src/components/QuizSidebar';
import QuizProgress from 'src/components/QuizProgress';
import QuizTitle from 'src/components/QuizTitle';
import QuizAnswers from 'src/components/QuizAnswers';
import QuizControls from 'src/components/QuizControls';
import TUPage from 'src/components/TUPage';
import QuizHint from 'src/components/QuizHint';
import QuizGifts from 'src/components/QuizGifts';
import QuizSubmitForm from 'src/components/QuizSubmitForm';
import styles from './App.module.scss';

const App = ({ store }) => {
  const {
    step,
    curQtn,
    incStep,
    decStep,
    isFinished,
    qtns,
  } = store;

  return (
    <div className={styles.wrapper}>
      <QuizBody>
        {
          !isFinished
            ? (
              <>
                <QuizProgress step={step} length={qtns.length} />
                <QuizTitle title={curQtn.title} step={step} />
                <QuizAnswers
                  answers={curQtn.answers}
                  type={curQtn.type}
                  checkAnswer={curQtn.checkAnswer}
                />
                <div className={styles.spacer} />
                <QuizControls
                  step={step}
                  incStep={incStep}
                  decStep={decStep}
                  answers={curQtn.answers}
                />
              </>
            )
            : (
              <>
                <QuizProgress isFinished />
                <TUPage />
              </>
            )
        }
      </QuizBody>
      <QuizSidebar>
        {
          !isFinished
            ? (
              <>
                <QuizHint hint={curQtn?.hint ? curQtn.hint : ''} />
                <QuizGifts />
              </>
            )
            : <QuizSubmitForm qtns={qtns} />
        }
      </QuizSidebar>
    </div>
  );
};

App.propTypes = {
  store: PropTypes.instanceOf(Store).isRequired,
};

export default observer(App);
