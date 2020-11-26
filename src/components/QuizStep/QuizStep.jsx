import React from 'react';
import { observer } from 'mobx-react';
import QuizAnswer from 'src/components/QuizAnswer';
import QuizTitle from 'src/components/QuizTitle';
import QuizControls from 'src/components/QuizControls';
import QuizProgress from 'src/components/QuizProgress';
import styles from './QuizStep.module.scss';

const QuizStep = observer((props) => {
  const {
    curQtn: {
      type,
      title,
      answers,
      checkAnswer,
    },
    incStep,
    decStep,
    step,
    qtnsLength,
  } = props;

  return (
    <>
      <QuizProgress step={step} length={qtnsLength} />
      <QuizTitle title={title} step={step} />
      <div className={styles.list}>
        {answers.map((answer) => (
          <QuizAnswer
            type={type}
            key={answer.id}
            id={answer.id}
            title={answer.title}
            checkAnswer={checkAnswer}
            isChecked={answer.isChecked}
          />
        ))}
      </div>
      <div className={styles.spacer} />
      <QuizControls
        step={step}
        incStep={incStep}
        decStep={decStep}
        answers={answers}
      />
    </>
  );
});

export default QuizStep;
