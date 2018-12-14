import * as React from 'react';
import { Map } from 'react-amap';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import BaseScreen from '../Component/BaseScreen';
import Container from '../Component/Container';
import History from '../tools/History';
import { PlanDetailType } from '../store/PlanDetail';
import { TitleAndContent } from '../Component/SubComponent';
import Global from '../tools/Global';


const PlanDetailContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-flow: wrap column;
`

const MapContainer = styled.div`
    height: 240px;
    width: 100%;
`

const MainContent = styled.main`
    padding: 10px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
`

interface Props {
    PlanDetailStore: {
        planDetailItem: PlanDetailType,
        effectPlanDetail: (payload: string) => void
    },
    match: {
        params: {
            id: string
        }
    }
}

@inject('PlanDetailStore')
@observer
class PlanDetail extends BaseScreen<Props, {}> {

    public componentDidMount() {
        this.props.PlanDetailStore.effectPlanDetail(this.props.match.params.id)
    }

    private onGoBack:() => void = () => {
        History.go(-1)
    }

    private FormatOperators(payload: any[]): string[] {
        let operatorArr: string[] = []
        if (payload && payload.length > 0) {
            for (let i of payload) {
                operatorArr.push(i.name_zh + '(' + i.mobile + ')')
            }
            return operatorArr;
        } else {
            return ['无'];
        }
    }

    private FormatNotificationAreas(payload: any[]): string[] {
        let notificationAreasArr: string[] = []
        if (payload && payload.length > 0) {
            for (let i of payload) {
                notificationAreasArr.push(i.area_name)
            }
            return notificationAreasArr;
        } else {
            return ['无'];
        }
        
    }

    private FormatRepresentedCompanys(payload: any[]): string[] {
        let representedCompanysArr: string[] = []
        if (payload && payload.length > 0) {
            for (let i of payload) {
                representedCompanysArr.push(i.abbr_name)
            }
            return representedCompanysArr;
        } else {
            return ['无'];
        }
    }

    public render() {
        let { planDetailItem }: { planDetailItem: PlanDetailType } = this.props.PlanDetailStore
        return (
            <Container title={'计划详情'} onChildrenGoBack={this.onGoBack}>
                <PlanDetailContainer>
                    <MapContainer>
                        <Map amapkey={'9f6d7aeea07a6cf22c570dee6ff704e2'} mapStyle={'amap://styles/6ac77331824ee21f09ab5783c8a5ed01'} />
                    </MapContainer>
                    <MainContent>
                        <section style={{background: '#fff', padding: '6px', boxSizing: 'border-box'}}>
                            <p style={{color: '#333', fontSize: '0.8rem', fontWeight: 700, lineHeight: '1.5rem'}}>基本信息</p>
                            <TitleAndContent title={'批号'} content={planDetailItem.plan_request_id} />
                            <TitleAndContent title={'申报单位'} content={planDetailItem.company_name + '(' + planDetailItem.creator_name + ')'} />
                            <TitleAndContent title={'飞行规则'} content={Global.flyRules.get(planDetailItem.flight_rules)} />
                            <TitleAndContent title={'任务类型'} content={planDetailItem.plan_type_desc} />
                            <TitleAndContent title={'机长/联系人'} content={this.FormatOperators(planDetailItem.operators).join('、')} />
                            <TitleAndContent title={'受理单位'} content={planDetailItem.accept_area ? planDetailItem.accept_area.area_name : ''} />
                            <TitleAndContent title={'通报单位'} content={this.FormatNotificationAreas(planDetailItem.notification_areas).join('、')} />
                            <TitleAndContent title={'代理企业'} content={this.FormatRepresentedCompanys(planDetailItem.represented_companys).join('、')} />
                        </section>
                    </MainContent>
                </PlanDetailContainer>
            </Container>
        );
    }
}

export default PlanDetail;