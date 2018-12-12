import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import styled from 'styled-components';

const ContainerComponent = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    flex-flow: wrap column;
`

const ChildrenContainer = styled.div`
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`

interface Props {
    new_msg_count?: number,
    title: string,
    home?: boolean,
    onChildrenGoBack?: () => void,
    onHomeEvent?: () => void
}

class Container extends React.Component<Props> {

    private onLeftEvent:() => void = () => {
        if (this.props.onChildrenGoBack) {
            this.props.onChildrenGoBack()
        } else if (this.props.onHomeEvent) {
            this.props.onHomeEvent()
        }
    }

    public render() {
        let { new_msg_count, title, home, onChildrenGoBack } = this.props
        return (
            <ContainerComponent>
                <NavBar
                    style={{background: '#58A8F5'}}
                    leftContent={
                        onChildrenGoBack ?
                        <p>
                            {<Icon type="left" />}
                        </p> :
                        <p>
                            <img style={{height: '30px', width: '30px'}} src={require('../assets/images/BA_home_message_2x.png')} alt="message"/>
                            {
                                (new_msg_count && new_msg_count > 0) ? (
                                    <i>{new_msg_count}</i>
                                ) : ('')
                            }
                        </p>
                    }
                    onLeftClick={this.onLeftEvent}
                    rightContent={home && <img style={{height: '30px', width: '30px'}} src={require('../assets/images/BA_home_user_2x.png')} alt="user"/>}
                >{title}</NavBar>
                <ChildrenContainer>
                    {this.props.children}
                </ChildrenContainer>
            </ContainerComponent>
        );
    }
}

export default Container;