import * as React from 'react';
import styled from 'styled-components'

const Row = styled.li`
    height: 50px;
    width: 100%;
    background: red;
`

class MessageCenter extends React.Component {

    public render() {
        return (
        <div className="MessageCenter">
            <ul>
                <Row />
            </ul>
        </div>
        );
    }
}

export default MessageCenter;
