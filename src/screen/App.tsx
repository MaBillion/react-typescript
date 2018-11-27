import * as React from 'react'
import MyRoutes from './router'
import { HashRouter } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component {
    public render() {
        return (
            <HashRouter>
                <MyRoutes />
            </HashRouter>
        )
    }
}

export default App
