import * as React from 'react';
import { Map } from 'react-amap';
// import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
// import Global from '../tools/Global';

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

class PlanDetail extends React.Component {
    public render() {
        return (
            <PlanDetailContainer>
                <MapContainer>
                    <Map amapkey={'9f6d7aeea07a6cf22c570dee6ff704e2'} mapStyle={'amap://styles/6ac77331824ee21f09ab5783c8a5ed01'} />
                </MapContainer>
                <main>
                    123
                </main>
            </PlanDetailContainer>
        );
    }
}

export default PlanDetail;