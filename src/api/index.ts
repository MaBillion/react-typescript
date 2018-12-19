import 'whatwg-fetch';
import { Toast } from 'antd-mobile';
import History from '../tools/History';

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
        let dataInfo = Object.assign({}, defaultData, dataItem);

        let params:string = ''
        if (dataInfo.isCostom) {
            param = dataInfo.body
        } else {
            param = {
                b: dataInfo.body,
                c: {}
            }
            console.log('Request URL:' + dataInfo.api, dataInfo.method, param)
            params = JSON.stringify(param)
        }
        fetch(dataInfo.api, {
                method: dataInfo.method,
                headers: dataInfo.headers,
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
                dataInfo.onSuccess(data)
            } else {
                if (err_code === -2) {
                    Toast.info('请先登录')
                    History.push('/Login')
                } else if (err_code in dataInfo.errCodes) {
                    console.log(err_code)
                    let msg = '请求失败'
                    msg = dataInfo.errCodes[err_code]
                    console.log(msg)
                    Toast.info(msg);
                }
            }
        }, (err:number) => {
            dataInfo.onErr(err)
        })
    }
}
