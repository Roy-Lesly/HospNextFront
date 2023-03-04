import { useState } from 'react';
import ReactiveButton from 'reactive-button';


interface ButtonProps {
    title: string;
    state?: string;
    onClickHandler: any
  }


const MyButton: React.FC<ButtonProps> = ({ title, state, onClickHandler}) => {

  return (
    <ReactiveButton
      buttonState={state}
      idleText={title}
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
  );
}

export default MyButton;