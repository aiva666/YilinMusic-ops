/*
 * @Date: 2021-08-03 10:50:03
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-29 16:20:58
 * @FilePath: \yilin-music-ops\src\components\Form\index.tsx
 */
import React from 'react';
import {
  Input,
  Upload,
  Button,
  Form,
  Checkbox,
  Row,
  Col,
  DatePicker,
  Select,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import CustomRadio from './Radio';

interface FormColType {
  span: number
}

interface optionType {
  title: string,
  value: string | number,
}

interface FormFieldType {
  type?: string,
  name?: string,
  label?: string,
  option?: any,
  valueType?: string,
  fieldProps?: any,
  formItemProps?: any,
  span?: number,
  fields?: FormFieldType[],
  customField?:React.ReactNode,
}

interface CommonFormType {
  // 表单初始值
  initDefaultValue?: any,
  // 提交事件
  onSubmit?: (val: any) => void,
  // 表单字段
  fields: FormFieldType[],
  // 自定义表单字段
  customField?: React.ReactNode,
  // 自定义按钮
  customBtns?: React.ReactNode,
  // 取消事件
  onCancel?: () => void,
  // 表单label栅格比例
  labelCol?: FormColType,
  // 表单域栅格比例
  wrapperCol?: FormColType,
}

interface stateType {
  formRef: any
}

const enumValueTransformList = (object: any) => {
  if (Object.prototype.toString.call(object) !== '[object Object]') return false;
  let arr: optionType[] = []
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      arr.push({
        title: element,
        value: parseInt(key)
      })
    }
  }
  return arr
}

const _defaultProps = {
  initDefaultValue: {},
  onSubmit: undefined,
  onCancel: undefined,
  fields: [],
  labelCol: { span: 3 },
  wrapperCol: null
}

class CommonForm extends React.Component<CommonFormType, stateType> {
  private static defaultProps = _defaultProps;
  constructor(props: CommonFormType) {
    super(props);
    this.state = {
      formRef: React.createRef<any>(),
    };
  }

  computeField(config: FormFieldType) {
    const {
      option = {},
      valueType = "text",
      fieldProps = {},
    } = config;

    let optionEnum = enumValueTransformList(option)
    switch (valueType) {
      case 'text':
        return <Input {...fieldProps} />;
      // case 'radio':
      //   return <CustomRadio data-list={radioOpt} defaultValue={defaultValue} />;
      case 'checkbox':
        return (
          <Checkbox.Group {...fieldProps}>
            {(optionEnum || []).map((item, index) => {
              return (
                <Checkbox key={item.value} value={item.value}>
                  {item.title}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case 'textarea':
        return <Input.TextArea {...fieldProps} />;
      case 'select':
        return (
          <Select {...fieldProps}>
            {(optionEnum || []).map((item, index) => {
              return (
                <Select.Option key={index} value={item.value}>
                  {item.title}
                </Select.Option>
              );
            })}
          </Select>
        );
      case 'upload':
        return (
          <Upload {...fieldProps}>
            <Button icon={<UploadOutlined />}>上传文件</Button>
          </Upload>
        );

      default:
        return null;
    }
  }

  componentDidMount() {
    // console.log(1,this.props.initialValues);
  }

  render() {
    const { props, state } = this;
    return (
      <Form
        labelCol={props.labelCol}
        wrapperCol={props.wrapperCol}
        initialValues={{ ...props.initDefaultValue }}
        onFinish={(v) => {
          props.onSubmit && props.onSubmit(v);
        }}
        ref={state.formRef}
        style={{ paddingTop: 26 }}
      >
        {
          props.fields.map((item, index) => {
            return item.type === 'customLayout' ?
              <Form.Item>
                <Row gutter={16}>
                  {(item.fields || []).map((i, ind) => {
                    return (
                      <Col span={item.span} key={i.name}>
                        <Form.Item {...i.formItemProps} >
                          {this.computeField(i)}
                        </Form.Item>
                      </Col>
                    );
                  })}
                </Row>
              </Form.Item>
              :

              item.type === 'customField' ? item.customField : <Form.Item key={item.name} name={item.name} label={item.label} {...item.formItemProps} >
              {this.computeField(item)}
            </Form.Item>

              
          })
        }

        {props.fields.length ?
          props.customBtns ?
            props.customBtns
            : <Form.Item>
              <div
                style={{
                  width: '100%',
                  margin: '26px 0 0',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
                <Button
                  onClick={() => {
                    props.onCancel && props.onCancel();
                  }}
                  style={{ marginLeft: 26 }}
                >
                  取消
                </Button>
              </div>
            </Form.Item>
          : null}
      </Form>
    );
  }
}

export default CommonForm;
