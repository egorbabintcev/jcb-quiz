import {
  observable,
  computed,
  action,
  makeObservable,
} from 'mobx';
import { v4 } from 'uuid';
import { RadioQuestion, CheckboxQuestion } from 'Stores/Question';

class Store {
  @observable qtns = [
    new RadioQuestion('Когда планируете снять офис?', [
      {
        id: v4(),
        title: 'В течение недели',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'В течение месяца',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Через несколько месяцев',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Точных ориентиров нет',
        isChecked: false,
      },
    ], 'Сроки, в которые вы хотите снять офис помогают точнее подобрать предложения'),
    new RadioQuestion('Помещение какой площади вы рассматриваете?', [
      {
        id: v4(),
        title: 'до 40м²',
        isChecked: false,
      },
      {
        id: v4(),
        title: '40-60м²',
        isChecked: false,
      },
      {
        id: v4(),
        title: '60-85м²',
        isChecked: false,
      },
      {
        id: v4(),
        title: '85-120м²',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Более 120м²',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Рассмотрю все варианты',
        isChecked: false,
      },
    ], 'От площади зависит скорость поиска свободных помещений'),
    new RadioQuestion('На каком этаже должен располагаться офис?', [
      {
        id: v4(),
        title: '1-10 этаж',
        isChecked: false,
      },
      {
        id: v4(),
        title: '10-25 этаж',
        isChecked: false,
      },
      {
        id: v4(),
        title: '25-45 этаж',
        isChecked: false,
      },
      {
        id: v4(),
        title: '45-60 этаж',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'выше 60 этажа',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Этаж не важен',
        isChecked: false,
      },
    ], 'На более высоких этажах больше помещений среднего и большого размера'),
    new RadioQuestion('На какой срок собираетесь въезжать?', [
      {
        id: v4(),
        title: '1 месяц',
        isChecked: false,
      },
      {
        id: v4(),
        title: '3-6 месяцев',
        isChecked: false,
      },
      {
        id: v4(),
        title: '6-12 месяцев',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Более 12 месяцев',
        isChecked: false,
      },
    ], 'Долгосрочная аренда обходится дешевле в пересчете на рубли в месяц'),
    new CheckboxQuestion('Какие дополнительный параметры вам нужны?', [
      {
        id: v4(),
        title: 'Вид на город',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Скидка на паркинг',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Без ремонта',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Интернет по Wi-Fi',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Наличие мебели',
        isChecked: false,
      },
      {
        id: v4(),
        title: 'Возможность установки перегородок',
        isChecked: false,
      },
    ], 'Мы подберем офис, соответсвующий вашим планам и намерениям на его эксплуатацию'),
  ];

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
    }
    this.step += 1;
  }

  @action decStep = () => {
    if (this.step - 1 < 0) return;
    this.step -= 1;
  }
}

export default Store;
