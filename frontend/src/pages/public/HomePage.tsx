import { Layout, theme } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Content } = Layout;

const tableList = [
    {
        name: "1",
        id: "1",
    },
    {
        name: "2",
        id: "2"
    },
    {
        name: "3",
        id: "3"
    },
    {
        name: "4",
        id: "4"
    },
    {
        name: "5",
        id: "5"
    },
    {
        name: "6",
        id: "6"
    },
    {
        name: "7",
        id: "7"
    },
    {
        name: "8",
        id: "8"
    },
    {
        name: "9",
        id: "9"
    },
    {
        name: "10",
        id: "10"
    },
    {
        name: "11",
        id: "11"
    },
    {
        name: "12",
        id: "12"
    },
    {
        name: "13",
        id: "13"
    },
    {
        name: "14",
        id: "14"
    }

]

const HomePage = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const navigate = useNavigate();

    const handlerBill = (id: string) => {
        navigate(`/ban/${id}`)
    }

    const ordersGetLocal = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders") || "") : []
    return (
        <Layout>
            <Content style={{
                padding: 24,
                margin: 0,
                background: colorBgContainer,
                borderRadius: "20px",
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            }}>
                <div className='flex gap-5 flex-wrap'>
                    {
                        tableList.map((item, index) => {
                            return (
                                <div onClick={() => handlerBill(item.id)} style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} key={item.id} className={`w-[330px] h-[200px] rounded-xl flex flex-col justify-center items-center cursor-pointer ${ordersGetLocal[index] ? "bg-green-500" : "bg-slate-300"}`}>
                                    <p className='text-[30px]'>Bàn {item.name}</p>
                                    {
                                        ordersGetLocal[index]?.order.total_amount &&  
                                        (
                                            <>
                                                <p className='text-[20px]'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(ordersGetLocal[index]?.order.total_amount)}</p>
                                                <p>Chưa thanh toán</p>
                                            </>
                                        )
                                        
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </Content>
        </Layout>
    );
};

export default HomePage;