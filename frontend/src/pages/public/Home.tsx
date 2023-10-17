import {Layout} from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header} = Layout;

const Home = () => {
    
    return (
        <Layout style={{ height: "100vh" }}>
            <Header style={{ background: "#e28743", fontSize: "24px", color: "white" }}>
                <div className='flex justify-between'>
                    <span>Gió Coffee</span>
                    <Link to="/he-thong" className='hover:text-white'>Giao diện quản lí</Link>
                </div>
            </Header>
            <Layout>
                <Layout style={{ padding: '24px 24px 24px' }}>
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Home;