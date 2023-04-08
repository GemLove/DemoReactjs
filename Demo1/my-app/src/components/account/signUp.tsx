import React from "react";
import { Button, Form, Input, Typography } from "antd";
import {
  LockOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Link } from "react-router-dom";
import axios from "axios";

const { Title } = Typography;

const SignUp = (props: any): JSX.Element => {
  const onFinish = async (values: any) => {
    let user: string = values.username;
    let pass: string = values.password;
    let conPass: string = values.confirmPassword;
    let des: string = "",
      mess: string = "Error";
    let notiType = "warning";
    props.setLoading(true);
    if (pass.length < 8) {
      des = "Password has at least 8 characters or more";
    } else if (pass !== conPass) {
      des = "Confirm Password does not match";
    } else {
      await axios
        .post("http://localhost:8080/account/register", {
          username: user,
          password: pass,
          repassword: conPass,
        })
        .then(function (resp) {
          const data = resp.data;
          if (data.success) {
            notiType = "success";
            mess = "Success";
            des = "Sign Up success";
            window.location.href = "/login";
          } else {
            notiType = "warning";
            mess = "Error";
            des = data.message;
          }
        })
        .catch(function (resp) {
          console.log(resp);
          notiType = "warning";
          mess = "Error";
          des = "Server is error";
        });
      

    }
    props.setLoading(false);
    props.openNotification(notiType, mess, des);
  };

  const onFinishFailed = (errorInfo: any) => {
    let user: string = errorInfo.values.username;
    let pass: string = errorInfo.values.password;
    let conPass: string = errorInfo.values.confirmPassword;
    let des = "";
    if (!user && !pass && !conPass) {
      des = "Username, Password and Confirm Password can not null";
    } else if (!user) {
      des = "Username can not null";
    } else if (!pass) {
      des = "Password can not null";
    } else {
      des = "Confirm Password can not null";
    }
    props.openNotification("warning", "Error", des);
  };
  console.log(props.loading);
  return (
    <ProCard>
      <Title level={2}>Sign Up</Title>
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
  );
};

export default SignUp;
