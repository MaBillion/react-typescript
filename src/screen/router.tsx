import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home';
import MessageCenter from './MessageCenter';
import Login from './Login'

export default class extends React.Component{
    public render() {
        return (
            <div>
                <Route exact={true} path='/' render={()=><Redirect to='/Home' />} />
                <Route path='/Home' component={Home} />
                <Route path='/MessageCenter' component={MessageCenter} />
                <Route path='/Login' component={Login} />
            </div>
        )
    }
}