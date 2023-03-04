import { Button } from 'antd';
import React, { FC } from 'react'


interface MyButtonProps {
	ButtonName: string,
	className?: string,
	ButtonType: any,
	onClick?: (e: any) => void
  disabled?: boolean
}

const CustomButton: FC<MyButtonProps> = ({ButtonName, ButtonType, onClick, className, disabled}) => {


  return (
	<>
        <Button 
          onClick={onClick} 
          type={ButtonType}
          className={className}
          disabled={disabled}
        >
            {ButtonName}
        </Button>

    </>
    )
  }

export default CustomButton;
