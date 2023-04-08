import React, { useState } from "react";
import { Col, Row, notification, Spin } from "antd";
import Login from "./Login";
import SignUp from "./signUp";

// Pacman

type NotificationType = "success" | "info" | "warning" | "error";

const Layout: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);

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

  const prop = {
    openNotification: openNotification,
    loading: { loading },
    setLoading: setLoading,
  };
  console.log({ ...prop });
  return (
    <Row
      style={{ background: "#F5F5F5", height: "100vh" }}
      justify="center"
      align="middle"
    >
      <Col xs={24} sm={12} md={8}>
        <Spin spinning={loading}>
          {contextHolder}

          {window.location.pathname  === "/login" ? (
            <Login {...prop}></Login>
          ) : (
            <SignUp {...prop}></SignUp>
          )}
        </Spin>
      </Col>
    </Row>
  );
};

export default Layout;
