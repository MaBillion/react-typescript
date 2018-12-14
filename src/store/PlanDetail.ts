import { observable, action } from 'mobx';
import { PlanListType, AirspaceServer } from './PlanList';
import { LatLngAddrLocal } from 'amap-shapes-generator';
import api from '../api/Index';

export interface TakeoffLandType extends LatLngAddrLocal {
    type: 1 | 2 | 3
}

export interface PlanDetailType extends PlanListType {
    short_company_name: string,
    short_represented_company_name: string,
    represented_companys: object[],
    plan_type_desc: string,
    user_aircrafts: object[],
    notes: string,
    operators: object[],
    end_time: string,
    release_time: {
        start_time: string,
        end_time: string
    },
    takeoff_report: {
        start_time: string,
        end_time: string
    },
    landing_report: {
        start_time: string,
        end_time: string,
        sortie: number
    },
    notification_areas: object[],
    accept_area: {
        area_name: string,
        area_id: number
    },
    new_airspaces: {
        tmp: AirspaceServer[],
        approval: object[]
    },
    backup_airports: LatLngAddrLocal[],
    approve_notes: string,
    flight_rules: 1 | 2 | 3,
    approval_infos: object[],
    takeoff_landing_points : TakeoffLandType[],
    plan_request_tracking: object[],
    company_id: number
}

class Store {
    @observable public planDetailItem: PlanDetailType = Object.create(null);
    
    @action
    private getPlanDetail(payload: PlanDetailType): void {
        this.planDetailItem = payload
    }

    public effectPlanDetail(payload: string): void {
        api.post({
            api: '/api/req/get_plan_request_info',
            body: {
                plan_request_id: payload
            },
            onSuccess: (res) => {
                this.getPlanDetail(res)
            },
            errCodes: {
                1: '该飞行计划不存在',
                2: '权限有误'
            }
        })
    }
}

const store = new Store()

export default store;