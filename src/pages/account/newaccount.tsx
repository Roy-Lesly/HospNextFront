import React, {useContext} from 'react'
import ContentLayout from '../../Components/Layout'
import { LaptopOutlined, NotificationOutlined, UserOutlined, DashboardFilled, DashboardOutlined, PercentageOutlined } from '@ant-design/icons';
import CreateUserForm from '@/Components/CreateUserForm';
import CustomTable from '@/Components/Table/CustomTable';


const NewAccount = () => {
  const icons = [UserOutlined, NotificationOutlined, LaptopOutlined]
  const navs = ["Nav1", "Nav2", "Nav3", "Nav4"]
  const submenu = [
    ["Nav1", "Nav2", "Nav3", "Nav4"],
    ["Nav1", "Nav2", "Nav3", "Nav4"],
  ]
  const children = <>
    <CreateUserForm />
  </>
  return (
      <div>
      <ContentLayout
        userName=''
        fetching
        pageTitle='New Account'
        breadCrumb1='Account'
        breadCrumb2='Create Account'
        navList={navs}
        iconList={icons}
        subMenuList={submenu}
        children={children}
      />
    </div>
  )
}

export default NewAccount