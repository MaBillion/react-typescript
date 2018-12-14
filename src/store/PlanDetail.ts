import { observable, action } from 'mobx';
import { PlanListType, AirspaceServer } from './PlanList';
import { LatLngAddrLocal } from 'amap-shapes-generator';
import api from '../api/Index';

export interface TakeoffLandType extends LatLngAddrLocal {
    type: 1 | 2 | 3
}

export interface RepresentedCompanysType {
    company_id: number,
    abbr_name: string
}

export interface UserAircraftsType {
    user_aircraft_id: number,
    serial_num: string,
    model: string,
    aircraft_type: string,
    manufacturer: string
}

export interface OperatorsType {
    operator_id: number,
    name_zh: string,
    id_type: number,
    id_code: string,
    mobile: string
}

export interface NotificationAreasType {
    area_name: string,
    area_id: number
}

export interface ApprovalType {
    approval_id: number,
    approval_name: string,
    space_infos: AirspaceServer
}

export interface ApprovalInfosType {
    approval_id: number,
    approval_name: string,
    serial_num: string,
    status: number
}

export interface PlanRequestTrackingType {
    status: number,
    time: string,
    operator: {
        id: number,
        name: string,
        mobile: string
    }
}

export interface PlanDetailType extends PlanListType {
    short_company_name: string,
    short_represented_company_name: string,
    represented_companys: RepresentedCompanysType[],
    plan_type_desc: string,
    user_aircrafts: UserAircraftsType[],
    notes: string,
    operators: OperatorsType[],
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
    notification_areas: NotificationAreasType[],
    accept_area: NotificationAreasType,
    new_airspaces: {
        tmp: AirspaceServer[],
        approval: ApprovalType[]
    },
    backup_airports: LatLngAddrLocal[],
    approve_notes: string,
    flight_rules: 1 | 2 | 3,
    approval_infos: ApprovalInfosType[],
    takeoff_landing_points : TakeoffLandType[],
    plan_request_tracking: PlanRequestTrackingType[],
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