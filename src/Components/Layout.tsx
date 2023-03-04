import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { Col, MenuProps, Row } from 'antd';
import { Avatar, Breadcrumb, Layout, Menu, theme, Badge } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;


interface LayoutProps {
  children: React.ReactNode
  pageTitle: string | null
  userName: string | null
  pageTitlePlural?: string
  setModalState?: (val: boolean) => void
  // dataSource: DataProps[]
  // columns: DataProps[]
  fetching: boolean

  customName?: string
  iconList?: any
  navList?: any
  subMenuList: any
  disableAddButton?: boolean
  // onRowClick?: (record: InventoryProps[]) => void
  // setRecord?: (record: InventoryProps[]) => void
  breadCrumb1?: string
  breadCrumb2?: string
  breadCrumb3?: string
}

const ContentLayout: React.FC<LayoutProps> = ({
  children, pageTitle, pageTitlePlural, fetching, breadCrumb1, breadCrumb2, breadCrumb3,
  iconList, navList, subMenuList, userName
}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false)

  const items1: MenuProps['items'] = navList ? navList.map((item: { id: number, name: string, link: string }) => ({
    key: item.id,
    label: (
      <Link href={item.link}>{item.name}</Link>
    ),
  })) : [];

  const items2: MenuProps['items'] = iconList ? iconList.map(
    (icon: any, index: number) => {

      return {
        key: subMenuList[index].id,
        icon: React.createElement(icon),
        label: subMenuList[index].title,

        children: subMenuList[index].subNavs.map((subNav: { id: number, name: string, link: string }) => {
          return {
            key: subNav.id,
            label: (
              <Link href={subNav.link}>{subNav.name}</Link>
            ),
          };
        }),
      };
    },
  ) : [];

  return (
    <Layout className='layout'>
      <Header className="header flex flex-row">
        <div className='cursor-pointer w-full'><code className='text-xl font-bold text-center text-yellow-400'>EMR - {pageTitle}</code></div>
        <div><Avatar className='bg-red-900' size={50}><p className='font-bold'>{userName}</p></Avatar></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} items={items1} />
        <div className=''>
          <Badge count={0} showZero><Avatar shape="square" size="large">Badge</Avatar></Badge>
        </div>
        <div>
          <Disclosure as="nav">
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2
            text-gray-100 hover:text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
            >
              <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </Disclosure>
        </div>
      </Header>
      <Layout className=''>
        <Sider trigger={null} collapsible collapsed={collapsed} width={200} style={{ background: colorBgContainer }}>
          <div>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{breadCrumb1}</Breadcrumb.Item>
            <Breadcrumb.Item>{breadCrumb2}</Breadcrumb.Item>
            <Breadcrumb.Item>{breadCrumb3}</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ContentLayout;