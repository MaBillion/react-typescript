import * as React from 'react';
import MyRoutes from './router';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from '../store/index';
import 'antd-mobile/dist/antd-mobile.css';
import '../assets/style/base.css'

class App extends React.Component {
    public render() {
        return (
            <HashRouter>
                <Provider {...store}>
                    <MyRoutes />
                </Provider>
            </HashRouter>
        )
    }
}

export default App
