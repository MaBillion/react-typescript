import * as React from 'react';
import { NavBar, WingBlank, Carousel } from 'antd-mobile';
import History from '../tools/History';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainContent = styled.main`
    flex: 1;
    display: flex;
    width: 100%;
`

const HomeContent = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: wrap column;
`

interface Props {
    HomeStore: any
}

interface State {
    CarouselDate: object[],
    imgHeight: string
}

@inject ('HomeStore')
@observer
class Home extends React.Component<Props, State> {
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

    private onGoBack: () => void = function() {
        History.push('/MessageCenter')
    }

    public render() {
        let { new_msg_count }: { new_msg_count: number } = this.props.HomeStore.initInfo
        return (
            <HomeContent>
                <NavBar
                    mode="dark"
                    leftContent={
                        <p>
                            <img style={{height: '30px', width: '30px'}} src={require('../assets/images/BA_home_message_2x.png')} alt="message"/>
                            {
                                new_msg_count > 0 && (
                                    <i>{new_msg_count}</i>
                                )
                            }
                        </p>
                    }
                    onLeftClick={this.onGoBack}
                    rightContent={<img style={{height: '30px', width: '30px'}} src={require('../assets/images/BA_home_user_2x.png')} alt="user"/>}
                >Home</NavBar>
                <WingBlank style={{margin: 0, padding: 0}}>
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
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
                    <Link style={{flex: 1, background: '#ff894b'}} to={'/PlanList'}>飞行计划</Link>
                    <Link style={{flex: 1, background: '#fff000'}} to={'/'}>aaaa</Link>
                </MainContent>
            </HomeContent>
        );
    }
}

export default Home;
