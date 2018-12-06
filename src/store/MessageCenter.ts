import { observable, action } from 'mobx';
import api from '../api/Index';

class Store {
    @observable public messageList: object[] = [];

    @action
    private getUserMessageList(payload: object[]):void {
        this.messageList = payload
    }

    public effectUserMessageList(payload: object):void {
        api.post({
            api: '/api/req/get_user_notify_msg_list_v201',
            body: payload,
            onSuccess: (res) => {
                this.getUserMessageList(res.list)
            }
        })
    }
}

const store = new Store();
export default store;