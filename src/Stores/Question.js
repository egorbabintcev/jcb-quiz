/* eslint-disable max-classes-per-file */
import {
  makeObservable,
  observable,
  action,
} from 'mobx';

class Question {
  @observable answers;

  constructor(title, answers, hint = '') {
    this.title = title;
    this.answers = answers;
    this.hint = hint;
    makeObservable(this);
  }
}

export class RadioQuestion extends Question {
  type = 'radio';

  constructor(title, answers, hint) {
    super(title, answers, hint);
    makeObservable(this);
  }

  @action checkAnswer = (id) => {
    this.answers = this.answers.map((answer) => ({
      ...answer,
      isChecked: answer.id === id,
    }));
  }
}

export class PictureRadioQuestion extends RadioQuestion {
  type = 'pictureRadio';

  constructor(title, answers, hint) {
    super(title, answers, hint);
    makeObservable(this);
  }
}

export class CheckboxQuestion extends Question {
  type='checkbox'

  constructor(title, answers, hint) {
    super(title, answers, hint);
    makeObservable(this);
  }

  @action checkAnswer = (id) => {
    this.answers = this.answers.map((answer) => ({
      ...answer,
      isChecked: answer.id === id ? !answer.isChecked : answer.isChecked,
    }));
  }
}
