import MyButton from '@/Components/Designs/MyButton'
import Link from 'next/link'
import React from 'react'
import RadiDash1 from './Dashboard/index'

const index = () => {
  return (
    <div className='container text-center justify-center flex flex-col'>
      <div className='p-2 text-xl font-bold md:text-4xl'>
        SELECT DEPARTMENT
      </div>
      <div className='m-5 p-2'>
        <Link href={"/Radiology/Echo"}>
          <MyButton 
            title='ULTRASOUND DEPARTMENT'
            onClickHandler={()=>{}}
          />
        </Link>
      </div>
      <div className='m-5 p-2'>
        <Link href={"/Radiology/Xray"}>
        <MyButton 
            title='XRAY DEPARTMENT'
            onClickHandler={()=>{}}
          />  
        </Link>
      </div>
    </div>
  )
}

export default index

