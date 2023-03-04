import React from 'react'
import { Carousel, Collapse, Divider, Layout, Space, Breadcrumb, theme, Menu } from 'antd';
import CustomFooter from '../Components/Footer';

const { Header, Sider, Content } = Layout;


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const home = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (<>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(6).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          {/* <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <section>
            <Carousel autoplay>
              <div><h3 style={contentStyle}>1</h3></div>
              <div><h3 style={contentStyle}>2</h3></div>
              <div><h3 style={contentStyle}>3</h3></div>
              <div><h3 style={contentStyle}>4</h3></div>
            </Carousel>
          </section>
          <section>
            <Divider>Departments</Divider>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
              <Collapse.Panel header="Registration" key="1"><p>{text}</p></Collapse.Panel>
              <Collapse.Panel header="Radiology" key="2"><p>{text}</p></Collapse.Panel>
              <Collapse.Panel header="Laboratory" key="3"><p>{text}</p></Collapse.Panel>
              <Collapse.Panel header="Pharmacy" key="4"><p>{text}</p></Collapse.Panel>
              <Collapse.Panel header="Physiotherapy" key="5"><p>{text}</p></Collapse.Panel>
              <Collapse.Panel header="Out Patient Department" key="6"><p>{text}</p></Collapse.Panel>
            </Collapse>
          </section>
        </div>
      </Content>
      <CustomFooter />
    </Layout>
    <main className='mx-20 mt-5'>


    </main>

  </>)
}

export default home;

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};