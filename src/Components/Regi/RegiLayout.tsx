import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { useIsLoggedIn } from '@/Utils/customHooks'
import Layout from '../Layout'
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import CustomTable from '@/Components/Table/CTable';
import { COLUMNS_ADMIN } from '@/Components/Table/Columns';

const RadiLayout = ({children}: any) => {

  // USE THIS LOCK FOR PROTECTED ROUTE =================================================
  const router = useRouter()
  const [userName, setUserName] = useState(null)
  const [deptname, setDeptName] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [userIsAdmin, setUserIsAdmin] = useState(false)
  useIsLoggedIn({
    successCallBack: (username: any, dept_name: any, userrole: any, is_admin: any) => {
      setUserName(username);
      setDeptName(dept_name);
      setUserRole(userrole);
      setUserIsAdmin(is_admin);
    },
    errorCallBack: () => { router.push("/login") },
  })
  // END OF BLOCK ======================================================================

  const navList: any = [
    {"id": 1, "name": "nav1", "link": "/Registraion/nav1"},
    {"id": 2, "name": "nav2", "link": "/Registraion/nav2"},
    {"id": 3, "name": "nav3", "link": "/Registraion/nav3"},
    {"id": 4, "name": "nav3", "link": "/Registraion/nav3"},
    {"id": 5, "name": "nav3", "link": "/Registraion/nav3"},
  ]
  const iconList: any = [UserOutlined, LaptopOutlined, NotificationOutlined]
  const subMenuList = [
    {
      id: 1,
      title: 'Dashboard',
      subNavs: [ 
        {"id": 11, "name": "Dash1", "link": "/Registration/DashReg"}, 
      ]
    },
    {
      id: 2,
      title: 'Patient',
      subNavs: [ {"id": 21, "name": "New Patient", "link": "/Registration/NewPatient"}, {"id": 22, "name": "name2", "link": "/Registraion/link22"}, {"id": 23, "name": "name3", "link": "link1"}],
    },
    {
      id: 3,
      title: 'STATISTICS',
      subNavs: [ {"id": 31, "name": "name5", "link": "/Registraion/link31"}, {"id": 32, "name": "name2", "link": "/Registraion/link32"}, {"id": 33, "name": "name3", "link": "link1"}],
    },

  ];

  


  return (  
  <Layout
    breadCrumb1={"Registraion"}
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

export default RadiLayout;
