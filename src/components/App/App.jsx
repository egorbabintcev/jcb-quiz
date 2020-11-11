import React from 'react';
import { observer } from 'mobx-react';
import Store from 'Stores';
import QuizBody from 'components/QuizBody';
import QuizSidebar from 'components/QuizSidebar';
import QuizProgress from 'components/QuizProgress';
import QuizTitle from 'components/QuizTitle';
import QuizAnswers from 'components/QuizAnswers';
import QuizControls from 'components/QuizControls';
import TUPage from 'components/TUPage';
import QuizHint from 'components/QuizHint';
import QuizGifts from 'components/QuizGifts';
import styles from './App.module.scss';

const App = observer(() => {
  const {
    step,
    curQtn,
    incStep,
    decStep,
    isFinished,
    qtns,
  } = Store;

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
          && (
            <>
              <QuizHint hint={curQtn?.hint ? curQtn.hint : ''} />
              <QuizGifts />
            </>
          )
        }
      </QuizSidebar>
    </div>
  );
});

export default App;
