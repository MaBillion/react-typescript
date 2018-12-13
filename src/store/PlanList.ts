import { observable, action } from 'mobx';
import api from '../api/Index';
import { AirspaceInfoCircleServer, AirspaceInfoLineServer, AirspaceInfoPolygonServer } from 'amap-shapes-generator';

export type AirspaceServer = AirspaceInfoCircleServer | AirspaceInfoLineServer | AirspaceInfoPolygonServer;

export interface PlanListPayloadType {
    offset: number,
    limit: number,
    plan_start_time?: string,
    plan_end_time?: string,
    plan_type?: number,
    status?: number,
    company_id?: number,
    all?: boolean
}

export interface PlanListType {
    refit_flying_report: 0 | 1 | 2,
    plan_request_id: string,
    create_time: string,
    plan_status: number,
    plan_type: string,
    fly_time: {
        start_time: string,
        end_time: string
    },
    airspace_infos: AirspaceServer[],
    reject_reason: string,
    company_name: string,
    creator_name: string,
    creator_mobile: number
}

class Store {
    @observable public planList: PlanListType[] = []

    @action
    public getPlanList(payload: PlanListType[]): void {
        this.planList = payload
    }

    public effectPlanList(payload: PlanListPayloadType): void {
        api.post({
            api: '/api/req/get_plan_request_list',
            body: payload,
            onSuccess:(res) => {
                if (Array.isArray(res.list)) {
                    this.getPlanList(res.list)
                }
            }
        })
    }
}

const store = new Store();

export default store;
