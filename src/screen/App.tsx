import * as React from 'react'
import MyRoutes from './router'
import { HashRouter } from 'react-router-dom';

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
