import { observable, action } from 'mobx';
import api from '../api/Index';

export interface MessagePayloadType {
    offset: number,
    limit: number
}

export interface MessageListType {
    company_name: string | null,
    content: string,
    is_read: boolean,
    msg_id: number,
    path: string,
    time: string,
    title: string
}

export interface MessageType {
    amount: number,
    list: MessageListType[],
    unread_msg_count: number
}

class Store {
    @observable public messageList: MessageListType[] = [];

    @action
    private getUserMessageList(payload: MessageListType[]): void {
        this.messageList = payload
    }

    public effectUserMessageList(payload: MessagePayloadType): void {
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