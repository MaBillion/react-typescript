import * as React from 'react';
import { NavBar } from 'antd-mobile';
import history from '../tools/history';
import { inject, observer } from 'mobx-react';

@inject ('HomeStore')
@observer
class Home extends React.Component<any, any> {

    public componentDidMount() {
        this.props.HomeStore.effectInitInfo()
    }

    private onGoBack: () => void = function() {
        history.push('/MessageCenter')
    }

    public render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent={
                        <p>
                            <img style={{height: '30px', width: '30px'}} src={require('../assets/images/BA_home_message_2x.png')} alt="message"/>
                            <i>123</i>
                        </p>
                    }
                    onLeftClick={this.onGoBack}
                    rightContent={<img style={{height: '30px', width: '30px'}} src={require('../assets/images/BA_home_user_2x.png')} alt="user"/>}
                >Home</NavBar>
        </div>
        );
    }
}

export default Home;
