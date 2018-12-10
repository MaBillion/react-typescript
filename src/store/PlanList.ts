import { observable, action } from 'mobx';
import api from '../api/Index';

class Store {
    @observable public planList: object[] = []

    @action
    public effectPlanList(payload: object): void {
        api.post({
            api: '/api/req/get_plan_request_list',
            body: payload,
            onSuccess:(res: any) => {

            }
        })
    }
}

const store = new Store();

export default store;
