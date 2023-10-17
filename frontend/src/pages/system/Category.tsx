import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getCategories } from '../../store/features/category/categorySilce';
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import ModalCreateCategory from '../../components/System/ModalCreateCategory';

const columns = [
    {
        title: 'Số thứ tự',
        dataIndex: 'key',
    },
    {
        title: 'Tên',
        dataIndex: 'title',
    },
    {
        title: 'Hành động',
        dataIndex: 'action',
    }
];

const Category = () => {
    const dispatch = useAppDispatch();
    const { categories, loading } = useAppSelector(state => state.category);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    useEffect(() => {
        dispatch(getCategories())
    }, [open])

    const data = [];

    for (let i = 0; i < categories.length; i++) {
        data.push({
            key: i + 1,
            title: categories[i].name,
            action: (
                <div className='flex'>
                    <Link to="/" className='fs-3 text-success me-3'>
                        <BiEdit style={{ fontSize: "20px" }} />
                    </Link>
                    <Link to="/" className='fs-3 text-danger' >
                        <AiFillDelete style={{ fontSize: "20px" }} />
                    </Link>
                </div>
            )
        });
    }
    return (
        <div className='p-2'>
            <h3 className='mb-4 text-[24px]'>Danh sách phân loại</h3>
            <div className='text-right'>
                <Button size={'large'} className='bg-green-500 text-white border-none hover:bg-green-600 hover:text-white outline-none' onClick={showModal}>
                    Thêm mới
                </Button>
            </div>
            <div className='p-4'>
                <Table columns={columns} dataSource={data} />
            </div>
            <ModalCreateCategory open={open} setOpen={setOpen} />
        </div>
    );
};

export default Category;