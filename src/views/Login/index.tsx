/*
 * @Date: 2021-11-29 10:32:12
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-29 16:40:11
 * @FilePath: \yilin-music-ops\src\views\Login\index.tsx
 */
import React, { FC } from 'react'
import { Form, Button, Row, Col, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import CustomForm from '@/components/Form'
import "./index.scss"

const Login: FC = () => {
    const navigate = useNavigate()
    const formFields = [
        {
            name: "userName",
            label: "用户名",

            fieldProps: {
                placeholder: '请输入用户名',
                allowClear: true,
            },
            formItemProps: {
                labelCol: { span: 4 },
                rules: [
                    {
                        required: true,
                        message: "请输入用户名",
                    }
                ]
            }
        },
        {
            name: "userpwd",
            label: "密码",
            fieldProps: {
                type: "password",
                visibilityToggle: true,
                placeholder: '请输入密码',
                allowClear: true,
            },
            formItemProps: {
                labelCol: { span: 4 },
                rules: [
                    {
                        required: true,
                        message: "请输入密码",
                    }
                ]
            }
        },
        {
            type: "customField",
            customField: (
                <Form.Item label="验证码" labelCol={{span:4}}>
                    <Row gutter={16}>
                        <Col span={10}>
                            <Form.Item
                                name="autoCode"
                                rules={[{
                                    required: true,
                                    message: "请输入验证码",
                                }]}
                                style={{marginBottom:0}}
                            >
                                <Input placeholder="请输入验证码" allowClear />
                            </Form.Item>
                        </Col>
                        <Col span={14}>
                            <div className="autoCode"></div>
                        </Col>
                    </Row>
                </Form.Item>
            )
        },
    ]

    const loginHandler = (val:any):void => {
        navigate('/console')
    } 

    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="form-wrapper">
                    <h2>欢迎登录</h2>
                    <CustomForm
                        initDefaultValue={{}}
                        onSubmit={loginHandler}
                        fields={formFields}
                        customBtns={
                        <Form.Item>
                            <Button size="large" block type="primary" htmlType="submit">登录</Button>
                            </Form.Item>
                            }
                    />
                </div>
            </div>
        </div>
    )
}

export default Login