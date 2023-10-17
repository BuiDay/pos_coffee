import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getCategories } from '../../store/features/category/categorySilce';

import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getGetProducts } from '../../store/features/products/productsSilce';
import { IProduct } from '../../interface/interface';
import { addOrder } from '../../store/features/order/orderSilce';

const Order = () => {
    const dispatch = useAppDispatch();
    const location = useLocation()
    const navigate = useNavigate() 
    const { categories } = useAppSelector(state => state.category);
    const { products } = useAppSelector(state => state.products);
    const orders = useAppSelector(state => state.orders);
    console.log(orders)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    useEffect(() => {
        dispatch(getGetProducts())
    }, [])

    const table = Number(location.pathname.split('/')[2])

    const handleAddOrder = (item: IProduct) => {
        dispatch(addOrder({
            table: table,
            items: [
                {
                    product: item,
                    quantity: 1
                }
            ]

        }))
    }

    const handleSaveOrders = () => {
        localStorage.setItem("orders", JSON.stringify(orders));
        navigate("/");
    }

    const handleDelete = () =>{
        
    }

    return (
        <div className='flex justify-between h-[88vh]'>
            <div className='w-[63%]'>
                <div className='flex flex-col h-full justify-between'>
                    <div className='h-[15%] bg-white rounded-md py-2 px-5' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                        <span className='text-[16px]'>Phân loại</span>
                        <div className='flex gap-1 mt-2'>
                            <div className='p-3 bg-slate-100 rounded-md cursor-pointer border'>
                                Tất cả
                            </div>
                            {
                                categories && categories?.map((item) => {
                                    return (
                                        <div className='p-3 bg-slate-100 rounded-md cursor-pointer border' key={item._id}>
                                            {item.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='h-[83%] bg-white rounded-md flex flex-wrap p-5 gap-3 overflow-y-auto' id="style-2" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                        {
                            products && products?.map((item) => {
                                return (
                                    <div onClick={() => handleAddOrder(item)} className='text-center' style={{ width: 150, height: 50, cursor: "pointer", border: "1px solid black" }} key={item._id}>
                                        <p className='text-[16px]'>{item.name}</p>
                                        <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='w-[35%] h-full bg-white rounded-xl flex flex-col justify-between overflow-hidden' style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                <div className='h-[80%] px-2'>
                    <div className='flex justify-around items-center border-b py-2 h-[10%]'>
                        <div className='p-3'>Danh sách đặt món</div>
                        <div className=''>
                            <p>Mã bill: #01</p>
                            <p>2022-03-25</p>
                        </div>
                    </div>
                    <div className='p-3 flex flex-col gap-3 h-[90%] overflow-y-auto style-2'>
                        {
                            orders[table-1] && orders[table-1].order.items?.map((item: any,index) => {
                                return (
                                    <div key={index} className='w-full bg-slate-200 rounded-md p-4 flex justify-between items-center'>
                                        <div className='w-[50%]'>
                                            <p className='text-[16px]'>{item.product.name}</p>
                                        </div>
                                        <div className='flex justify-between items-center bg-white rounded-xl'>
                                            <div className='bg-orange-400 p-1 cursor-pointer'>
                                                <AiOutlinePlus />
                                            </div>
                                            <input type='text' defaultValue={item.quantity} className='w-[30px] text-center bg-transparent outline-none'></input>
                                            <div className='bg-orange-400 p-1 cursor-pointer'>
                                                <AiOutlineMinus />
                                            </div>
                                        </div>
                                        <div className='text-[#ff4d4d] cursor-pointer' onClick={()=>handleDelete()}>
                                            <AiFillDelete size={20} />
                                        </div>
                                        <p>
                                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.product.price)}
                                        </p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className='h-[20%] flex flex-col justify-between'>
                    <div className='flex justify-between px-5 text-[18px] font-semibold'>
                        <span>Tổng tiền:</span>
                        <span> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Number(orders[table-1] && orders[table-1].order.total_amount))}</span>
                    </div>
                    <div className='text-white text-[18px]'>
                        <div className='flex w-full'>
                            <div onClick={()=>handleSaveOrders()} className='p-3 bg-green-500 flex-1 text-center cursor-pointer'>Lưu bàn</div>
                            <div className='p-3 bg-orange-500 flex-1 text-center cursor-pointer'>Thanh toán</div>
                        </div>
                        {/* <div className='p-3 bg-orange-400 text-center cursor-pointer'>Thanh toán nhanh</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;