import React from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";
import {
  LockOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// Pacman

const Login = (props: any): JSX.Element => {
  async function onFinish(values: any) {
    let user: string = values.username;
    let pass: string = values.password;
    let des: string = "Error",
      mess: string = "";
    let notiType = "warning";
    props.setLoading(true);
    if (pass.length < 8) {
      des = "Password has at least 8 characters or more";
    } else {
      await axios
        .post("http://localhost:8080/account/login", {
          username: user,
          password: pass,
        })
        .then(function (resp) {
          const data = resp.data;
          if (data.username) {
            notiType = "success";
            mess = "Success";
            des = "Login Success ";
            const user = data.username;
            cookies.set("_user", user, { path: "/" });
            window.location.href = "/home";
          } else {
            notiType = "warning";
            mess = "Error";
            des = "Server returns bad data";
          }
        })
        .catch(function (resp) {
          notiType = "warning";
          mess = "Error";
          des = "Username or password is valid";
        });
    }
    props.setLoading(false);
    props.openNotification(notiType, mess, des);
  }

  const onFinishFailed = (errorInfo: any) => {
    let user: string = errorInfo.values.username;
    let pass: string = errorInfo.values.password;
    let des = "";
    if (
      (user === undefined && pass === undefined) ||
      (user.trim() === "" && pass.trim() === "")
    ) {
      des = "Username and password can not null";
    } else if (user === undefined || user.trim() === "") {
      des = "Username can not null";
    } else {
      des = "Password can not null";
    }
    props.openNotification("warning", "Error", des);
  };
  return (
    <ProCard title="Login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
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
            Or <Link to={"/signUp"}>register now!</Link>
          </Space>
        </Form.Item>
        <Form.Item>
          <Link to="/home">
            <ArrowLeftOutlined /> Back to home
          </Link>
        </Form.Item>
      </Form>
    </ProCard>
  );
};

export default Login;
