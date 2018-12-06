import * as React from 'react';
import styled from 'styled-components'
import { inject, observer } from 'mobx-react';

const Row = styled.li`
    height: 50px;
    width: 100%;
    margin: 10px 2px;
`

interface State {
    offset: number,
    limit: number
}

interface Props {
    MessageCenterStore: any
}

@inject ('MessageCenterStore')
@observer
class MessageCenter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            offset: 0,
            limit: 20
        }
    }

    public componentDidMount() {
        this.props.MessageCenterStore.effectUserMessageList(this.state)
    }

    private onGetMessageList:() => any = () => {
        const { messageList }: { messageList: object[] } = this.props.MessageCenterStore
        const messageListDom = messageList.map((item: any, index: number) => {
            return (
                <Row key={index}>{item.content}</Row>
            );
        })
        return messageListDom
    }

    public render() {
        return (
            <div className="MessageCenter">
                <ul>
                    {this.onGetMessageList()}
                </ul>
            </div>
        );
    }
}

export default MessageCenter;
