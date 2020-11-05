import React from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

const Result = observer((props) => {
  const { qtns } = props;

  return (
    <ol>
      {toJS(qtns).map((qtn) => {
        const { title, answers } = qtn;

        return (
          <li key={Math.random()} style={{ fontSize: '1.2rem' }}>
            <p>
              {title}
            </p>
            <p>{answers.filter((a) => a.isChecked).map((a) => a.title).join(', ')}</p>
          </li>
        );
      })}
    </ol>
  );
});

export default Result;
