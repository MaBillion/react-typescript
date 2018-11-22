import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import MessageCenter from './MessageCenter';

export default class MyRouter extends React.Component {
    public render() {
        return (
            <div>
                <Route exact path='/' render={()=><Redirect to='/Home' />} />
                <Route path='/Home' component={Home} />
                <Route path='/MessageCenter' component={MessageCenter} />
            </div>
        );
    }
}

