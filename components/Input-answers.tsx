import React, { useState } from "react";

//propsで値を受け取る宣言。（忘れがちなので注意）
const InputForm = (props: { handleValueChange: (arg0: any) => void; }) => {
  // 親コンポーネントから受け取った関数を使って、inputの値を渡す
  
  /*const handleInputChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    props.handleValueChange(value);
  };*/


  const handleChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
  }

  const handleKeyDown = (event: { target: any; key: string; }) => {
    if (event.key === 'Enter') {
        const value = event.target.value;
       
        const regex = /^[ぁ-んー]+$/u;
        if (regex.test(event.target.value) && (event.target.value).length==4) {
            props.handleValueChange(value);
            event.target.value = ("");
        }
    }
  }
  

  return (
    <>
      <input
        type="text"
        // フォームが更新されるとhandleInputChangeが呼ばれる
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default InputForm;


