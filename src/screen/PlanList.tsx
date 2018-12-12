import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Global from '../tools/Global';
import { combineAirspaceContent, getFormatTime } from '../tools/BusinessUtil';
import { Link } from 'react-router-dom';
import BaseScreen from '../Component/BaseScreen';
import Container from '../Component/Container';
import History from '../tools/History';

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
        effectPlanList: (payload: object) => void,
        planList: object[]
    }
}

interface State {
    planListParam: {
        offset: number,
        limit: number,
        plan_start_time?: string,
        plan_end_time?: string,
        plan_type?: number,
        status?: number,
        company_id?: number,
        all?: boolean
    }
}

@inject('PlanListStore')
@observer
class PlanList extends BaseScreen<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            planListParam: {
                offset: 0,
                limit: 20
            }
        }
    }

    public componentDidMount() {
        this.props.PlanListStore.effectPlanList(this.state.planListParam)
    }

    private onGoBack:() => void = () => {
        History.go(-1)
    }

    public render() {
        let { planList }: { planList: object[] } = this.props.PlanListStore
        return (
            <Container title={'计划列表'} onChildrenGoBack={this.onGoBack}>
                <ul>
                    {
                        planList.map((item: any, index: number) => {
                            return (
                                <Row key={index}>
                                    <Link to={`/PlanDetail/${item.plan_request_id}`}>
                                        <section style={{height: '24px', lineHeight: '24px'}}>
                                            <span style={{fontSize: '14px', fontWeight: 700, color: '#666'}}>{item.plan_type}</span>
                                            <span style={{fontSize: '12px', color: '#58A8F5', float: 'right'}}>{Global.planDetailStatus.get(item.plan_status)}</span>
                                        </section>
                                        <section style={{lineHeight: '24px', fontSize: '13px'}}>
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