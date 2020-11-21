import {
  observable,
  computed,
  action,
  makeObservable,
} from 'mobx';
import { v4 } from 'uuid';
import { RadioQuestion, PictureRadioQuestion } from 'Stores/Question';

const data = [
  new PictureRadioQuestion('На какой технике работаете?', [
    {
      id: v4(),
      title: '3CX, 4CX, 5CX',
      isChecked: false,
      imgSrc: 'cx-model.png',
    },
    {
      id: v4(),
      title: 'JC160-JC290',
      isChecked: false,
      imgSrc: 'jc-model.png',
    },
    {
      id: v4(),
      title: 'Другая модель JCB',
      isChecked: false,
      imgSrc: 'other-model.png',
    },
    {
      id: v4(),
      title: 'Нужна консультация',
      isChecked: false,
    },
  ], '<strong>Запчасти от других моделей подходят только в 80% случаев.</strong><p>3CX – передние колеса маленькие</p><p>3CX super – одинаковые колеса, радиус 24 дюйма</p><p>4CX – одинаковые колеса, но радиус 26 дюймов</p><p>5CX – обновленная версия 4CX, выпускается с 2013 года</p><p>jc160-jc290 – частично совместимы с моделями выше</p>'),
  new RadioQuestion('Какой год выпуска техники?', [
    {
      id: v4(),
      title: 'До 2005 года',
      isChecked: false,
    },
    {
      id: v4(),
      title: 'С 2005 года по настроящее время',
      isChecked: false,
    },
    {
      id: v4(),
      title: 'Нужна консультация',
      isChecked: false,
    },
  ], '<strong>В зависимсти от года выпуска будут отличаться запчасти. Например было выпущено несколько двигателей.</strong><p>Если не знаете год выпуска техники, мы подкажем по WhatsApp как определиться.</p>'),
  new PictureRadioQuestion('В каком месте находится необходимая запчасть?', [
    {
      id: v4(),
      title: 'Передняя или задняя стрела',
      isChecked: false,
      imgSrc: 'arm-part.png',
    },
    {
      id: v4(),
      title: 'Электрика',
      isChecked: false,
      imgSrc: 'wire-part.png',
    },
    {
      id: v4(),
      title: 'Кабина',
      isChecked: false,
      imgSrc: 'cabin-part.png',
    },
    {
      id: v4(),
      title: 'Двигатель',
      isChecked: false,
      imgSrc: 'engine-part.png',
    },
    {
      id: v4(),
      title: 'Гидравлика',
      isChecked: false,
      imgSrc: 'hydraulic-part.png',
    },
  ], '<strong>В зависимсти от года выпуска будут отличаться запчасти. Например было выпущено несколько двигателей.</strong><p>Если не знаете год выпуска техники, мы подкажем по WhatsApp как определиться.</p>'),
  new RadioQuestion('Как удобно получить запчасти?', [
    {
      id: v4(),
      title: 'Доставка по Москве',
      isChecked: false,
    },
    {
      id: v4(),
      title: 'Доставка по РФ в ваш город',
      isChecked: false,
    },
    {
      id: v4(),
      title: 'Самовывоз из Одинцово',
      isChecked: false,
    },
    {
      id: v4(),
      title: 'Другой',
      isChecked: false,
    },
  ], '<ul><li><strong>По РФ или СНГ отправляем в день заказа любой транспорной компаний.</strong><br><small>До терминала привезем бесплатно</small></li><li><strong>По Москве доставим в день заказа курьером. Прямо к вам на объект или сервисный центр.</strong></li><li><strong>Все запчасти в наличии в магазине в Одинцово. Находится в 6 км от МКАД</strong></li><li><strong>Доставим любым удобным способом.</strong></li></ul>'),
];

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
