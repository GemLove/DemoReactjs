import React, { useState } from "react";
import { Button, Form, Input, Col, Row, notification, Typography } from "antd";
import {
  LockOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Outlet, Link } from "react-router-dom";

const { Title } = Typography;

type NotificationType = "success" | "info" | "warning" | "error";

const SignUp: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (
    type: NotificationType,
    mess: string,
    des: string
  ) => {
    api[type]({
      message: mess,
      description: des,
      duration: 1.5,
      placement: "topRight",
    });
  };

  const onFinish = (values: any) => {
    let user: string = values.username;
    let pass: string = values.password;
    let conPass: string = values.confirmPassword;
    let des: string = "",
      mess: string = "Error";
    let notiType: NotificationType = "warning";
    if (pass.length < 6 ) {
      des = "Password has at least 6 characters or more";
    } else if (pass !== conPass) {
      des = "Confirm Password does not match";
    } else {
      notiType = "success";
      mess = "Success";
      des = "Login Success";
    }
    openNotification(notiType, mess, des);
    if (notiType == "success") {
      // window.location.href="/Home"
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    let user: string = errorInfo.values.username;
    let pass: string = errorInfo.values.password;
    let conPass: string = errorInfo.values.confirmPassword;
    let des = "";
    if (!user && !pass && !conPass ) {
      des = "Username, Password and Confirm Password can not null";
    } else if (!user) {
      des = "Username can not null";
    } else if (!pass) {
      des = "Password can not null";
    } else {
      des = "Confirm Password can not null";
    }
    openNotification("warning", "Error", des);
  };
  return (
    <Row
      style={{ background: "#F5F5F5", height: "100vh" }}
      justify="center"
      align="middle"
    >
      <Col xs={24} sm={12} md={8}>
        <ProCard>
          <Title level={2}>Sign Up</Title>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            {contextHolder}
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign Up
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to={"/login"}>
                <ArrowLeftOutlined />
                Back to Login
              </Link>
            </Form.Item>
          </Form>
        </ProCard>
      </Col>
    </Row>
  );
};

export default SignUp;
