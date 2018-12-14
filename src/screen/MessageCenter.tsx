import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import BaseScreen from '../Component/BaseScreen';
import Container from '../Component/Container';
import History from '../tools/History';
import { MessageListType } from '../store/MessageCenter';

const Row = styled.li`
    min-height: 80px;
    padding: 8px 4px;
    box-sizing: border-box;
    margin: 10px 2px;
    box-shadow: 0px 1px 6px #999;
    line-height: 1.5rem;
`

interface State {
    offset: number,
    limit: number
}

interface Props {
    MessageCenterStore: {
        effectUserMessageList: (payload: State) => void,
        messageList: MessageListType[]
    }
}

@inject ('MessageCenterStore')
@observer
class MessageCenter extends BaseScreen<Props, State> {
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
        const { messageList }: { messageList: MessageListType[] } = this.props.MessageCenterStore
        const messageListDom = messageList.map((item: MessageListType, index: number) => {
            return (
                <Row key={index}>
                    <p>
                        <span style={{fontSize: '0.8rem', fontWeight: 700, color: '#333'}}>{item.title}</span>
                        <span style={{float: 'right', fontSize: '0.7rem', color: '#666'}}>{item.time}</span>
                    </p>
                    <p style={{fontSize: '0.7rem'}}>{item.content}</p>
                    <p style={{fontSize: '0.7rem', color: '#58A8F5'}}>{item.company_name}</p>
                </Row>
            );
        })
        return messageListDom
    }

    private onGoBack:() => void = () => {
        History.go(-1)
    }

    public render() {
        return (
            <Container title={'消息中心'} onChildrenGoBack={this.onGoBack}>
                <ul>
                    {this.onGetMessageList()}
                </ul>
            </Container>
        );
    }
}

export default MessageCenter;
