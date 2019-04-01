import * as React from 'react';
import { WingBlank, Carousel } from 'antd-mobile';
import History from '../tools/History';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Common from '../tools/Common';
import BaseScreen from '../Component/BaseScreen';
import Container from '../Component/Container';
import { InitType } from '../store/Home';

const MainContent = styled.main`
    flex: 1;
    display: flex;
    width: 100%;
    flex-flow: wrap column;
`

const HomeContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: wrap column;
`

interface Props {
    HomeStore: {
        effectInitInfo: () => void,
        initInfo: InitType
    }
}

interface State {
    CarouselDate: object[],
    imgHeight: string
}

@inject ('HomeStore')
@observer
class Home extends BaseScreen<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            CarouselDate: [{
                imgSrc: require('../assets/images/BA_banner_coolflight@2x.png'),
                alt: 'coolflight'
            }, {
                imgSrc: require('../assets/images/BA_banner_xinhong@2x.png'),
                alt: 'xinhong'
            }],
            imgHeight: 'auto'
        }
    }

    public componentDidMount() {
        this.props.HomeStore.effectInitInfo()
    }

    private onLogOut: () => void = () => {
        Common.clearCookie()
        History.push('/Login')
    }

    private onPushMessageCenter: () => void = () => {
        History.push('/MessageCenter')
    }

    public render() {
        let { new_msg_count }: { new_msg_count: number } = this.props.HomeStore.initInfo
        return (
            <Container new_msg_count={new_msg_count} title={'酷飞'} home={true} onHomeEvent={this.onPushMessageCenter}>
                <HomeContent>
                    <WingBlank style={{margin: 0, padding: 0, width: '100%'}}>
                        <Carousel
                            autoplay={true}
                            infinite={true}
                            >
                            {this.state.CarouselDate.map((val: any, index: number) => ( 
                                <img
                                    src={val.imgSrc}
                                    alt={val.alt}
                                    key={index}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                    </WingBlank>
                    <MainContent>
                        <Link style={{flex: 0.5, background: '#ff894b', textAlign: 'center'}} to={'/PlanList'}>飞行计划</Link>
                        <section style={{flex: 0.5, background: '#fff000', textAlign: 'center'}} onClick={this.onLogOut}>退出登录</section>
                        <section style={{flex: 0.5, background: '#00ff00', textAlign: 'center'}}>新闻</section>
                        <section style={{flex: 0.5, background: '#227efb', textAlign: 'center'}}>商城</section>
                    </MainContent>
                </HomeContent>
            </Container>
        );
    }
}

export default Home;
