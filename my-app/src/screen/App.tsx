import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import MyRouter from './router';

class App extends React.Component {
  public render(): any {
    return (
      <HashRouter>
        <MyRouter />
      </HashRouter>
    );
  }
}

export default App;
