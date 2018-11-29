import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './screen/App';
import { configure } from 'mobx';

configure({
    enforceActions: "always"
});

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
