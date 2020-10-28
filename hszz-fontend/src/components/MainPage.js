import {Layout, Menu} from "antd";
import React from "react";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined
} from "@ant-design/icons";
import Top from "./Top";
import OrderMaintain from "./OrderMaintain";
import AddOrder from "./AddOrder";
import App from "../App";
import {Link, Redirect, Route, Switch} from "react-router-dom";


const {SubMenu} = Menu;
const {Header, Sider, Content, Footer} = Layout;

export default class MainPage extends React.Component {
    state = {
        collapsed: false
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Header style={{background: '#EEEEEE', padding: 0}}>
                    <Top/>
                </Header>
                <Content style={{height: '100%'}}>
                    <Layout style={{height: '100%'}}>
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                            style={{margin: '1px'}}>
                            <div className="logo"/>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}>
                                <SubMenu key="sub1" icon={<MailOutlined />} title="订单管理">
                                    <Menu.Item key="1"><Link to="/orderMaintain">查询订单</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/addOrder">录入订单</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="商品管理">
                                    <Menu.Item key="3">商品列表</Menu.Item>
                                    <Menu.Item key="4">库存信息</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="5" icon={<PieChartOutlined />}>
                                    用户管理
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{height: '100%'}}>
                            <Content style={{
                                margin: '8px 8px', padding: 15, background: '#fff', minHeight: 800
                            }}>
                                <div style={{height:'10px'}}/>
                                <Switch>
                                    <Route exact path="/" component={OrderMaintain}/>
                                    <Route path="/orderMaintain" component={OrderMaintain}/>
                                    <Route path="/app" component={App}/>
                                    <Route path="/addOrder" component={AddOrder}/>
                                    <Redirect to="/"/>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Content>
            </Layout>

        );
    }
}


