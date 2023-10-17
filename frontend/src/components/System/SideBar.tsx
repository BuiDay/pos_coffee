import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Trang chủ', '/he-thong', <MailOutlined />),
    getItem('Phân loại', 'phan-loai', <MailOutlined />),
    getItem('Sản phẩm', 'san-pham', <AppstoreOutlined />),
    // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    //     getItem('Option 9', '9'),
    //     getItem('Option 10', '10'),
    //     getItem('Option 11', '11'),
    //     getItem('Option 12', '12'),
    // ]),
];

// submenu keys of first level

const SideBar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSelectedKeys, setIsSelectedKeys] = useState(location.pathname.split("/")[2]?.length > 0 ? location.pathname.split("/")[2] : "/")
    const [isOpenKeys, setIsOpenKeys] = useState(location.pathname.split("/")[1]?.length > 0 ? location.pathname.split("/")[1] : "/")


    const handleNavigate = (key: any) => {
        if (key[0] !== "logout") {
            // if (key.length > 1)
                navigate(`${key[0]}`)
            // else
            //     navigate(`/`)
        } else {
            // dispatch(resetGetCurrent())
            // dispatch(logout())
        }
    }

    

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={[isSelectedKeys]}
            defaultOpenKeys={[isOpenKeys]}
            style={{ width: 250 }}
            items={items}
            onClick={(e) => { handleNavigate(e.keyPath) }}
        />
    );
};

export default SideBar