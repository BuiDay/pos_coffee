import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import productsService from '../../store/features/products/productsService';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getCategories } from '../../store/features/category/categorySilce';

interface IProps {
    open: boolean,
    setOpen: any
}

const ModalCreateProducts: React.FC<IProps> = ({ open, setOpen }) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("");
    const dispatch = useAppDispatch();
    const { categories, loading } = useAppSelector(state => state.category);

    const handleCancel = () => {
        setOpen(false);
    };

    const handleOk = async () => {
        const res: any = await productsService.apiCreateProduct(
            {
                name,
                price,
                category
            }
        )
        console.log(res)
        if (res.success) {
            setOpen(false);
        }
    }

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <Modal
            width={300}
            open={open}
            title="Tạo sản phẩm mới"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel} style={{ background: "red", color: "white", border: "none" }}>
                    Hủy
                </Button>,
                <Button disabled={name ? false : true} onClick={handleOk} style={{ background: "green", color: "white", border: "none" }}>
                    Thêm
                </Button>
            ]}
        >
            <div className='mt-[20px] flex flex-col gap-3'>
                <h2>Tên sản phẩm</h2>
                <Input onChange={(e) => setName(e.target.value)} value={name} />
                <h2>Giá sản phẩm</h2>
                <Input onChange={(e) => setPrice(Number(e.target.value))} value={price} />
                <h2>Phân loại</h2>
                <select name="category" id="cars" className='border p-1 rounded-md outline-none' onChange={(e)=>setCategory(e.target.value)}>
                    {
                        categories && categories.map((item)=>{
                            return(
                                <option key={item._id} value={item._id}>{item.name}</option>
                            )
                        })
                    }
                   
                </select>
            </div>
        </Modal>
    );
};

export default ModalCreateProducts;