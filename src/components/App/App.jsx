import React from 'react';
import { observer } from 'mobx-react';
import Store from 'Stores';
import QuizStep from 'components/QuizStep';
import Result from 'components/Result';
import QuizSidebar from 'components/QuizSidebar';
import styles from './App.module.scss';

const App = observer(() => {
  const {
    step,
    curQtn,
    curQtn: { hint = '' },
    incStep,
    decStep,
    isFinished,
    qtns,
  } = Store;

  return (
    <div className={styles.wrapper}>
      <div className={styles.step}>
        {
          !isFinished
            ? (
              <QuizStep
                step={step}
                curQtn={curQtn}
                incStep={incStep}
                decStep={decStep}
                qtnsLength={qtns.length}
              />
            )
            : <Result qtns={qtns} />
        }
      </div>
      <QuizSidebar hint={hint} />
    </div>
  );
});

export default App;
