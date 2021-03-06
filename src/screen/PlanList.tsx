import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Global from '../tools/Global';
import { combineAirspaceContent, getFormatTime } from '../tools/BusinessUtil';
import { Link } from 'react-router-dom';
import BaseScreen from '../Component/BaseScreen';
import Container from '../Component/Container';
import History from '../tools/History';
import { PlanListPayloadType, PlanListType } from '../store/PlanList';

const Row = styled.li`
    width: 100%;
    min-height: 80px;
    margin: 10px 0;
    padding: 2px 6px;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px #ddd;
`

interface Props {
    PlanListStore: {
        effectPlanList: (payload: PlanListPayloadType) => void,
        planList: PlanListType[]
    }
}

@inject('PlanListStore')
@observer
class PlanList extends BaseScreen<Props, PlanListPayloadType>{
    constructor(props: Props) {
        super(props)
        this.state = {
            offset: 0,
            limit: 20
        }
    }

    public componentDidMount() {
        this.props.PlanListStore.effectPlanList(this.state)
    }

    private onGoBack:() => void = () => {
        History.go(-1)
    }

    public render() {
        let { planList }: { planList: PlanListType[] } = this.props.PlanListStore
        return (
            <Container title={'计划列表'} onChildrenGoBack={this.onGoBack}>
                <ul>
                    {
                        planList.map((item: PlanListType, index: number) => {
                            return (
                                <Row key={index}>
                                    <Link to={`/PlanDetail/${item.plan_request_id}`}>
                                        <section style={{height: '2rem', lineHeight: '2rem'}}>
                                            <span style={{fontSize: '0.85rem', fontWeight: 700, color: '#666'}}>{item.plan_type}</span>
                                            <span style={{fontSize: '0.65rem', color: '#58A8F5', float: 'right'}}>{Global.planDetailStatus.get(item.plan_status)}</span>
                                        </section>
                                        <section style={{lineHeight: '1.4rem', fontSize: '0.75rem'}}>
                                            <p>
                                                <span>作业空域：</span>
                                                <span>{combineAirspaceContent(item.airspace_infos, 5).join('、')}</span>
                                            </p>
                                            <p>
                                                <span>时间安排：</span>
                                                <span>{getFormatTime(item.fly_time)}</span>
                                            </p>
                                        </section>
                                    </Link>
                                </Row>
                            )
                        })
                    }
                    
                </ul>
            </Container>
        );
    }
}

export default PlanList;