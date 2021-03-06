import * as React from 'react';
import { InputItem, Button } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import { LoginPayloadType } from '../store/Login';
import { isIPhone } from '../tools/BusinessUtil';
let moneyKeyboardWrapProps:any;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: (e: Event) => {
            e.preventDefault()
        }
    };
}

interface State {
    nameType: "number" | "text" | "bankCard" | "phone" | "digit" | "money",
    pwdType: "password",
    userName: string,
    pwd: string
}

interface Props {
    LoginStore: {
        effectLogin: (payload: LoginPayloadType) => void
    }
}

@inject ('LoginStore')
@observer
class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            nameType: "text",
            pwdType: "password",
            userName: '',
            pwd: ''
        }
    }

    private onUserNameChange = (value: string) => {
        this.setState({
            userName: value
        })
    }

    private onUserPwdChange = (value: string) => {
        this.setState({
            pwd: value
        })
    }

    private onLogin = () => {
        let { userName, pwd } = this.state
        this.props.LoginStore.effectLogin({account: userName, pwd})
    }

    public render() {
        return (
            <div className="Login">
                <InputItem
                    onChange={this.onUserNameChange}
                    type={this.state.nameType}
                    moneyKeyboardAlign="left"
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                >账号</InputItem>
                <InputItem
                    onChange={this.onUserPwdChange}
                    type={this.state.pwdType}
                    moneyKeyboardAlign="left"
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                >密码</InputItem>
                <Button type="primary" onClick={this.onLogin}>登录</Button>
            </div>
        );
    }
}

export default Login;
