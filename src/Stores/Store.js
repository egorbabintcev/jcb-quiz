import {
  observable,
  computed,
  action,
  makeObservable,
} from 'mobx';
import { v4 } from 'uuid';
import { RadioQuestion, PictureRadioQuestion } from 'src/Stores/Question';

const json = require('./data.json');

const data = json.map((q) => {
  const wrappedAnswers = q.answers.map((a) => ({ ...a, id: v4(), isChecked: false }));
  switch (q.type) {
    case 'default':
      return new RadioQuestion(q.title, wrappedAnswers, q.hint);

    case 'withPicture':
      return new PictureRadioQuestion(q.title, wrappedAnswers, q.hint);

    default:
      return q;
  }
});

class Store {
  @observable qtns = [...data];

  @observable step = 0;

  @observable isFinished = false;

  @computed get curQtn() {
    const { qtns, step } = this;
    if (qtns[step]) {
      return qtns[step];
    }
    return {};
  }

  constructor() {
    makeObservable(this);
  }

  @action incStep = () => {
    if (this.step + 1 === this.qtns.length) {
      this.isFinished = true;
    } else {
      this.step += 1;
    }
  }

  @action decStep = () => {
    if (this.step - 1 < 0) return;
    this.step -= 1;
  }
}

export default Store;
