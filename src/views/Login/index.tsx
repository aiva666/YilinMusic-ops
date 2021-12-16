/*
 * @Date: 2021-11-29 10:32:12
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-16 17:16:28
 * @FilePath: \yilin-music-ops\src\views\Login\index.tsx
 */
import React, { FC } from "react";
import { Form as AntdForm, Button, Row, Col, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Form } from "sd-components-react";
import "./index.scss";

const Login: FC = () => {
    const navigate = useNavigate();
    const formFieldsConfig = [
        {
            dataIndex: "userName",
            title: "用户名",
            fieldProps: {
                placeholder: "请输入用户名",
                allowClear: true,
            },
            formItemProps: {
                labelCol: { span: 4 },
                rules: [
                    {
                        required: true,
                        message: "请输入用户名",
                    },
                ],
            },
        },
        {
            dataIndex: "userpwd",
            title: "密码",
            fieldProps: {
                type: "password",
                visibilityToggle: true,
                placeholder: "请输入密码",
                allowClear: true,
            },
            formItemProps: {
                labelCol: { span: 4 },
                rules: [
                    {
                        required: true,
                        message: "请输入密码",
                    },
                ],
            },
        },
        {
            /* eslint react/no-multi-comp: "off" */
            renderFormItem: () => (
                <AntdForm.Item label="验证码" labelCol={{ span: 4 }}>
                    <Row gutter={16}>
                        <Col span={10}>
                            <AntdForm.Item
                                name="autoCode"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入验证码",
                                    },
                                ]}
                                style={{ marginBottom: 0 }}
                            >
                                <Input placeholder="请输入验证码" allowClear />
                            </AntdForm.Item>
                        </Col>
                        <Col span={14}>
                            <div className="autoCode">666</div>
                        </Col>
                    </Row>
                </AntdForm.Item>
            ),
        },
    ];

    const loginHandler = (val: any): void => {
        navigate("/console");
    };

    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="form-wrapper">
                    <h2>欢迎登录</h2>
                    <Form
                        onSubmit={loginHandler}
                        fieldsConfig={formFieldsConfig}
                        renderBtn={() => (
                            <AntdForm.Item>
                                <Button block type="primary" size="large" htmlType="submit">登录</Button>
                            </AntdForm.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
