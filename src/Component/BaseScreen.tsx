import * as React from 'react';

class BaseScreen<Props, State> extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
}

export default BaseScreen;