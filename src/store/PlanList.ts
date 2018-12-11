import { observable, action } from 'mobx';
import api from '../api/Index';

class Store {
    @observable public planList: object[] = []

    @action
    public getPlanList(payload: object[]): void {
        this.planList = payload
    }

    public effectPlanList(payload: object): void {
        api.post({
            api: '/api/req/get_plan_request_list',
            body: payload,
            onSuccess:(res: any) => {
                if (Array.isArray(res.list)) {
                    this.getPlanList(res.list)
                }
            }
        })
    }
}

const store = new Store();

export default store;
