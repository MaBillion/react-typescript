import * as React from 'react';
import styled from 'styled-components';

const Content = styled.p`
    display: flex;
    margin: 4px 0;
    line-height: 1.3rem;
    color: #666;
    font-size: 0.7rem;
`

interface Props {
    title: string,
    content: string | undefined
}


export function TitleAndContent(props: Props) {
    return (
        <Content>
            <span style={{flex: 0.2}}>{props.title}</span>
            <span style={{flex: 0.8}}>{props.content}</span>
        </Content>
    )
}