import { action } from 'mobx';
import api from '../api/Index';
import History from '../tools/History'

export interface LoginPayloadType {
    account: string,
    pwd: string
}

class Store {
    @action
    public effectLogin(payload: LoginPayloadType): void{
        api.post({
            api: '/api/user/login',
            body: payload,
            onSuccess: (res: any) => {
                History.push('/Home')
            }
        })
    }
}

let store = new Store();
export default store;
