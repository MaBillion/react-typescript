import * as React from 'react';
import { inject, observer } from 'mobx-react';

@inject('PlanListStore')
@observer
class PlanList extends React.Component{
    public render() {
        return (
            <div>123</div>
        );
    }
}

export default PlanList;