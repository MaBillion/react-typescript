import { action } from 'mobx';
import api from '../api/Index';
import history from '../tools/history'

class Store {
    @action
    public effectLogin:(payload: object) => void = function(payload: object) {
        api.post({
            api: '/api/user/login',
            body: payload,
            onSuccess: (res: any) => {
                history.push('/Home')
            }
        })
    }
}

let store = new Store();
export default store;
