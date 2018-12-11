import { action } from 'mobx';
import api from '../api/Index';
import History from '../tools/History'

class Store {
    @action
    public effectLogin:(payload: object) => void = (payload: object) => {
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
