import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import classes from './Sidebar.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DatabaseOutlined,
  FileSearchOutlined,
  DashboardOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, ConfigProvider } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  path?: string,
): MenuItem {
  return {
    key,
    icon,
    children,
    label: path ? (
      <Link to={path} style={{ color: 'inherit', textDecoration: 'none' }}>
        {label}
      </Link>
    ) : (
      label
    ),
  } as MenuItem;
}

const Sidebar = () => {
  const username = useAuthStore((state) => state.username);

  const [collapsed, setCollapsed] = useState(false);
  const {
    // token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const items: MenuItem[] = [
    getItem('Материалы', 'materials', <FileSearchOutlined />),
    getItem('Загрузка', 'upload', <DownloadOutlined />),
    getItem('Дашборд', '', <DashboardOutlined />),
    getItem('Статистика', 'statistics', <DatabaseOutlined />),
  ];

  const handleMenuClick = (info: { key: string }) => {
    // Навигация по клику
    navigate(`/${username}/${info.key}`);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className={classes.sider}
    >
      <div className="demo-logo-vertical" />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: '#1ec0c8',
              itemSelectedColor: '#001529',
              itemBg: '#001529',
              itemColor: '#fff',
              itemHoverColor: '#1ec0c8',
            },
          },
        }}
      >
        <Menu
          // theme="dark"
          defaultSelectedKeys={['']}
          mode="inline"
          items={items}
          className={classes.menu}
          onClick={handleMenuClick}
        />
      </ConfigProvider>
    </Sider>
  );
};

export default Sidebar;
