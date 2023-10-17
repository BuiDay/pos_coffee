import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { Input } from 'antd';
import categoryService from '../../store/features/category/categoryService';

interface IProps {
    open: boolean,
    setOpen: any
}

const ModalCreateCategory: React.FC<IProps> = ({ open, setOpen }) => {
    const [nameCate,setNameCate] = useState("")
    const handleCancel = () => {
        setOpen(false);
    };

    const handleOk = async () => {
        const res:any = await categoryService.apiCreateCategory({name:nameCate})
        if(res.success){
            setOpen(false);
            setNameCate("")
        }
    }
    return (
        <Modal
            open={open}
            title="Tạo phân loại mới"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel} style={{background:"red",color:"white",border:"none"}}>
                  Hủy
                </Button>,
                <Button disabled={nameCate ? false : true} onClick={handleOk} style={{background:"green",color:"white",border:"none"}}>
                  Thêm
                </Button>
              ]}
        >
            <div className='mt-[20px]'>
                <h2>Tên phân loại</h2>
                <Input onChange={(e)=>setNameCate(e.target.value)} value={nameCate}/>
            </div>
        </Modal>
    );
};

export default ModalCreateCategory;