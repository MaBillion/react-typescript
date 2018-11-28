import * as React from 'react';
import { Link } from 'react-router-dom';

class MessageCenter extends React.Component {
    public render() {
        return (
        <div className="MessageCenter">
            <Link to='Login'>Login</Link>
        </div>
        );
    }
}

export default MessageCenter;
