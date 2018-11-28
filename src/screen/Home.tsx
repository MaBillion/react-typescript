import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import history from '../tools/history';

class Home extends React.Component {

    private onGoBack: () => void = function() {
        history.go(-1);
    }

    public render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={this.onGoBack}
                    rightContent={<p>
                        <img style={{height: '30px', width: '30px'}} src={require('../assets/images/BA_home_message_2x.png')} alt="message"/>
                        <img style={{height: '30px', width: '30px'}} src={require('../assets/images/BA_home_user_2x.png')} alt="user"/>
                    </p>}
                >Home</NavBar>
        </div>
        );
    }
}

export default Home;
