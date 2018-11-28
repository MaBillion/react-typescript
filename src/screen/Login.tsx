import * as React from 'react';
import { InputItem, Button } from 'antd-mobile';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps:any;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: (e:any) => {
        e.preventDefault()
    }
  };
}

interface State {
    type: "number" | "password" | "text" | "bankCard" | "phone" | "digit" | "money",
    userName: string,
    pwd: string
}

class Login extends React.Component<{}, State> {
    constructor(props:any) {
        super(props)
        this.state = {
            type: "money",
            userName: '',
            pwd: ''
        }
    }

    private onUserNameChange = (value:string) => {
        this.setState({
            userName: value
        })
    }

    private onUserPwdChange = (value:string) => {
        this.setState({
            pwd: value
        })
    }

    private onLogin = () => {
        let { userName, pwd } = this.state
        console.log(userName)
        console.log(pwd)
    }

    public render() {
        return (
        <div className="Login">
            <InputItem
                onChange={this.onUserNameChange}
                type={this.state.type}
                moneyKeyboardAlign="left"
                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >账号</InputItem>
            <InputItem
                onChange={this.onUserPwdChange}
                type={this.state.type}
                moneyKeyboardAlign="left"
                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >密码</InputItem>
            <Button type="primary" onClick={this.onLogin}>登录</Button>
        </div>
        );
    }
}

export default Login;
