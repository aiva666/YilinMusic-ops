/*
 * @Date: 2021-08-04 16:18:47
 * @LastEditors: Aiva
 * @LastEditTime: 2021-08-04 16:49:46
 * @FilePath: \hcp_front_web\src\components\Common\Form\Radio\index.js
 */
import React from 'react';
import { Radio } from 'antd';

const CustomRadio = (props) => {
  const [active, setActive] = React.useState(props.defaultValue || null);
  const changeHandler = (e) => {
    const v = e.target.value;
    setActive(v);
    props.onChange && props.onChange(v);
  };
  return (
    <Radio.Group onChange={changeHandler} value={active}>
      {props['data-list'].map((item, index) => {
        return (
          <Radio key={index} value={item.value}>
            {item.title}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default CustomRadio;
