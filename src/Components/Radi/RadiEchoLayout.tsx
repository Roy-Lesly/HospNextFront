import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { useIsLoggedIn } from '@/Utils/customHooks'
import Layout from '../Layout'
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, UserAddOutlined, UserDeleteOutlined,  } from '@ant-design/icons';
import CustomTable from '@/Components/Table/CustomTable';
import { COLUMNS_ADMIN } from '@/Components/Table/Columns';

const RadiEchoLayout = ({children}: any) => {

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
    {"id": 1, "name": "nav1", "link": "/Radiology/Echo/nav1"},
    {"id": 2, "name": "nav2", "link": "/Radiology/Echo/nav2"},
    {"id": 3, "name": "nav3", "link": "/Radiology/Echo/nav3"},
    {"id": 4, "name": "nav3", "link": "/Radiology/Echo/nav3"},
    {"id": 5, "name": "nav3", "link": "/Radiology/Echo/nav3"},
  ]
  const iconList: any = [UserOutlined, UserAddOutlined, NotificationOutlined, UserAddOutlined, LaptopOutlined]
  const subMenuList = [
    {
      id: 1,
      title: 'Dashboard',
      subNavs: [ 
        {"id": 11, "name": "Dash1", "link": "/Radiology/Echo/DashU"}, 
        {"id": 12, "name": "Dash2", "link": "/Radiology/Echo/DashU/DashU2"}, 
        {"id": 13, "name": "Dash3", "link": "/Radiology/Echo/DashU/DashU3"}],
    },
    {
      id: 2,
      title: 'Patient',
      subNavs: [ 
        {"id": 21, "name": "New Patient", "link": "/Radiology/Echo/NewUPatient"}, 
        {"id": 22, "name": "name5", "link": "/Radiology/Echo/link22"}, 
        {"id": 22, "name": "name6", "link": "/Radiology/Echo/link22"},
      ]
    },
    {
      id: 3,
      title: 'Exam',
      subNavs: [ 
        {"id": 31, "name": "New Exam", "link": "/Radiology/Echo/NewUExam"}, 
        {"id": 32, "name": "name2", "link": "/Radiology/Echo/link32"}, 
      ]
    },
    {
      id: 4,
      title: 'New Procedure',
      subNavs: [ 
        {"id": 31, "name": "New Exam", "link": "/Radiology/Echo/NewUExamItem"}, 
      ]
    },
    {
      id: 5,
      title: 'New Result',
      subNavs: [ 
        {"id": 31, "name": "New Result", "link": "/Radiology/Echo/NewFindings"}, 
      ]
    },

  ];

  


  return (  
  <Layout
    breadCrumb1={"Radiology"}
    breadCrumb2={"Ultrasound"}
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

export default RadiEchoLayout;
