import * as React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import history from '../tools/history';

class Home extends React.Component {

    public onGoBack: () => void = function() {
        history.go(-1);
    }

  public render() {
    return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.onGoBack}
                rightContent={[
                    <Icon key="1" type="ellipsis" />
                ]}
            >Home</NavBar>
      </div>
    );
  }
}

export default Home;
