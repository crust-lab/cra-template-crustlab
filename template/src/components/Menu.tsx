import React, { useState } from 'react';
import {Layout, Menu as AntMenu} from 'antd';
import {CaretRightOutlined, MailOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom';

const {Sider} = Layout;

const Menu = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <AntMenu theme="dark">
                <AntMenu.Item key='/' icon={<CaretRightOutlined />}>
                    <Link to='/'>Movies</Link>
                </AntMenu.Item>
                <AntMenu.Item key='contact' icon={<MailOutlined />}>
                    <Link to='/contact'>Contact</Link>
                </AntMenu.Item>
            </AntMenu>
        </Sider>);
};

export default Menu;
