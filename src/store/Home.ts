import {  observable, action } from 'mobx';
import api from '../api/Index';

class Store {

    @observable protected initInfo:object = Object.create(null)

    @action
    protected getInitInfo(payload: object): void {
        this.initInfo = payload;
    }

    public effectInitInfo():void {
        api.post({
            api: '/api/req/init',
            onSuccess: (res) => {
                this.getInitInfo(res)
            }
        })
    }
}

let store = new Store();
export default store;
