import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { useIsLoggedIn } from '@/Utils/customHooks'
import Layout from '../../Components/Layout'
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import CustomTable from '@/Components/Table/CustomTable';
import { COLUMNS_ADMIN } from '@/Components/Table/Columns';

const AdminLayout = ({children}: any) => {

  // USE THIS LOCK FOR PROTECTED ROUTE =================================================
  const router = useRouter()
  const [userName, setUserName] = useState(null)
  const [deptname, setDeptName] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [userIsAdmin, setUserIsAdmin] = useState(false)
  useIsLoggedIn({
    successCallBack: (username, dept_name, userrole, is_admin) => {
      setUserName(username);
      setDeptName(dept_name);
      setUserRole(userrole);
      setUserIsAdmin(is_admin);
    },
    errorCallBack: () => { router.push("/login") },
  })
  // END OF BLOCK ======================================================================

  const navList: any = [
    {"id": 1, "name": "nav1", "link": "/Administration/nav1"},
    {"id": 2, "name": "nav2", "link": "/Administration/nav2"},
    {"id": 3, "name": "nav3", "link": "/Administration/nav3"},
    {"id": 4, "name": "nav3", "link": "/Administration/nav3"},
    {"id": 5, "name": "nav3", "link": "/Administration/nav3"},
  ]
  const iconList: any = [UserOutlined, LaptopOutlined, NotificationOutlined]
  const subMenuList = [
    {
      id: 1,
      title: 'Dashboard',
      subNavs: [ 
        {"id": 11, "name": "Dash1", "link": "/Administration/Dashboard"}, 
        {"id": 12, "name": "Dash2", "link": "/Administration/Dashboard/Dash2"}, 
        {"id": 13, "name": "Dash3", "link": "/Administration/Dashboard/Dash3"}],
    },
    {
      id: 2,
      title: 'Account',
      subNavs: [ 
        {"id": 21, "name": "Accounts", "link": "/Administration/Accounts"}, 
        {"id": 22, "name": "name2", "link": "/Administration/link22"}, 
      ]
    },
    {
      id: 3,
      title: 'STATISTICS',
      subNavs: [ {"id": 31, "name": "name5", "link": "/Administration/link31"}, {"id": 32, "name": "name2", "link": "/Administration/link32"}, {"id": 33, "name": "name3", "link": "link1"}],
    },

  ];

  


  return (  
  <Layout
    breadCrumb1={"Administration"}
    fetching
    pageTitle={deptname}
    userName={userName}
    navList={navList}
    iconList={iconList}
    subMenuList={subMenuList}
  >
    {children}
  </Layout>

  )
}

export default AdminLayout;
