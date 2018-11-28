import * as React from 'react';
// import { InputItem } from 'antd-mobile';
// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let moneyKeyboardWrapProps:any;
// if (isIPhone) {
//   moneyKeyboardWrapProps = {
//     onTouchStart: (e:any) => e.preventDefault(),
//   };
// }

interface State {
    type: string
}

class Login extends React.Component<State> {
    constructor(props:any) {
        super(props)
        this.state = {
            type: 'money'
        }
    }
    public render() {
        console.log(this.state)
        return (
        <div className="Login">
            {/* <InputItem
                type={this.state.type}
                defaultValue={100}
                placeholder="start from left"
                clear
                moneyKeyboardAlign="left"
                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >光标在左</InputItem> */}
        </div>
        );
    }
}

export default Login;
