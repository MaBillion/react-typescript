import * as React from 'react';
import { Map } from 'react-amap';
// import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import BaseScreen from '../Component/BaseScreen';
import Container from '../Component/Container';
import History from '../tools/History';


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

class PlanDetail extends BaseScreen<{}, {}> {

    private onGoBack:() => void = () => {
        History.go(-1)
    }

    public render() {
        return (
            <Container title={'计划详情'} onChildrenGoBack={this.onGoBack}>
                <PlanDetailContainer>
                    <MapContainer>
                        <Map amapkey={'9f6d7aeea07a6cf22c570dee6ff704e2'} mapStyle={'amap://styles/6ac77331824ee21f09ab5783c8a5ed01'} />
                    </MapContainer>
                    <main>
                        123
                    </main>
                </PlanDetailContainer>
            </Container>
        );
    }
}

export default PlanDetail;