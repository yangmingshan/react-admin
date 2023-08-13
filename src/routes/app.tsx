import { useState, Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Spin, Layout, Menu, Button } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AreaChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { useFm } from '../hooks/fm';

export default function App() {
  const fm = useFm();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="min-h-screen">
      <Layout.Sider trigger={null} collapsed={collapsed}>
        <div className="h-[32px] m-[16px] bg-[#ffffff20] rounded-[6px]" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={[
            {
              key: '/foo',
              icon: <AreaChartOutlined />,
              label: <Link to="/foo">{fm('foo')}</Link>,
            },
            {
              key: '/bar',
              icon: <PieChartOutlined />,
              label: <Link to="/bar">{fm('bar')}</Link>,
            },
          ]}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header className="p-0 bg-white">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            className="!w-[64px] h-[64px] text-[16px]]"
            onClick={toggleMenu}
          />
        </Layout.Header>
        <Layout.Content className="my-[24px] mx-[16px] p-[24px] bg-white">
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center">
                <Spin />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
