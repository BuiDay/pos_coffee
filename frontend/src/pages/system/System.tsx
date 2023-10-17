import { Breadcrumb, Layout, theme } from 'antd';
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import SideBar from '../../components/System/SideBar';
const { Header, Sider, Content } = Layout;

const System = () => {
    const {token: { colorBgContainer }} = theme.useToken();
    return (
        <Layout style={{height:"100vh"}}>
            <Header style={{background:"#e28743",fontSize:"24px",color:"white"}}>
                <div className='flex justify-between'> 
                    <span>Gió Coffee</span>
                    <Link to="/" className='hover:text-white'>Giao diện bán hàng</Link>
                </div>
            </Header>
            <Layout>
                <Sider width={250} style={{background:"white"}}>
                    <SideBar />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {/* <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <Content style={{
                        padding: 24,
                        margin: 0,
                        borderRadius:"20px",
                        background: colorBgContainer,
                        boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                     }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default System;