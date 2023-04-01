import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Col, Row, notification, Space } from "antd";
import { LockOutlined, UserOutlined,ArrowLeftOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Outlet, Link } from "react-router-dom";



type NotificationType = "success" | "info" | "warning" | "error";

const Login: React.FC = () => {
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
    let des: string = "Error",
      mess: string = "";
    let notiType: NotificationType = "warning";
    if (pass.length < 6) {
      des = "Password has at least 6 characters or more";
    } else if (user !== "admin" && pass !== "123456") {
      des = "Usernmae or password is valid";
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
    let des = "";
    if (
      (user == undefined && pass == undefined) ||
      (user.trim() == "" && pass.trim() == "")
    ) {
      des = "Username and password can not null";
    } else if (user == undefined || user.trim() == "") {
      des = "Username can not null";
    } else {
      des = "Password can not null";
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
        <ProCard title="Login">
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
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              {/* <a className="login-form-forgot" href="">
                Forgot password
              </a> */}
            </Form.Item>

            <Form.Item>
              <Space>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <Link to={"/SignUp"}>register now!</Link></Space>
            </Form.Item>
            <Form.Item>
            <Link to="/Home">
                  <ArrowLeftOutlined/>    Back to home</Link>
            </Form.Item>
          </Form>
        </ProCard>
      </Col>
    </Row>
  );
};

export default Login;
