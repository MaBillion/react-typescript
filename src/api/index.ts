import 'whatwg-fetch';
import { Toast } from 'antd-mobile';
import history from '../tools/history';

interface ApiRules {
    method?: string,
    api: string,
    body?: object,
    headers?: object,
    onSuccess: (res: any) => void,
    onErr?: (res: any) => void,
    errCodes?: object,
    isCostom?: boolean
}

export default {
    post (dataItem: ApiRules) {
        let param:object | undefined = {};
        let defaultData = {
                method: 'POST',
                api: '',
                body: {},
                headers: {'Content-Type': 'application/json;charset=UTF-8'},
                onSuccess: (res:any) => {},
                onErr: (err:any) => {
                    let msg = '请求失败'
                    Toast.info(msg);
                },
                errCodes: {},
                isCostom: false
        }
        defaultData = Object.assign({}, defaultData, dataItem);

        let params:string = ''
        if (defaultData.isCostom) {
            param = defaultData.body
        } else {
            param = {
                b: defaultData.body,
                c: {}
            }
            console.log('Request URL:' + defaultData.api, defaultData.method, param)
            params = JSON.stringify(param)
        }
        fetch(defaultData.api, {
                method: defaultData.method,
                headers: defaultData.headers,
                credentials: 'include',
                body: params
            }
        ).then((res:any) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject('something went wrong!')
            }
        }).then((res:any) => {
            let {data, success, err_code} = res
            if (success) {
                console.log('Response: ', data)
                defaultData.onSuccess(data)
            } else {
                if (err_code === -2) {
                    Toast.info('请先登录')
                    history.push('/Login')
                } else if (err_code in defaultData.errCodes) {
                    console.log(err_code)
                    let msg = '请求失败'
                    msg = defaultData.errCodes[err_code]
                    console.log(msg)
                    Toast.info(msg);
                }
            }
        }, (err:number) => {
            defaultData.onErr(err)
        })
    }
}
