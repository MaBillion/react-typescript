import {  observable, action } from 'mobx';
import api from '../api/Index';

export interface CompaniesType {
    company_id: number,
    name: string,
    abbr_name: string,
    level: 1 | 2 | 3,
    need_complete: boolean 
}

export interface InitType {
    new_msg_count: number,
    welcome_msg: {
        title: string,
        content: string,
        link: string,
        type: 1
    },
    companies: CompaniesType[]
}

class Store {

    @observable protected initInfo: InitType = Object.create(null)

    @action
    private getInitInfo(payload: InitType): void {
        this.initInfo = payload;
    }

    public effectInitInfo():void {
        api.post({
            api: '/api/req/init_v201',
            onSuccess: (res) => {
                this.getInitInfo(res)
            }
        })
    }
}

let store = new Store();
export default store;
