import * as React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import MessageCenter from './MessageCenter';

export default class extends React.Component{
    public render() {
        return (
            <div>
                <Route path='/Home' component={Home} />
                <Route path='/MessageCenter' component={MessageCenter} />
            </div>
        )
    }
}