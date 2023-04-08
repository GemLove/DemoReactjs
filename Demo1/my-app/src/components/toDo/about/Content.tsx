import React, { useState } from "react";
import { Row, Col, Divider, Typography } from "antd";
import demo from "../../../assets/image/demo.jpg"
const { Title } = Typography;

const ContentComponents: React.FC = () => {
  return (
    <>
        <Divider>
          <Title level={2}>Demo</Title>
        </Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={12}
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            
          >
            It's my demo
          </Col>
          <Col
            className="gutter-row"
            span={12}
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={16}
          >
          </Col>
        </Row>
    </>
  );
};

export default ContentComponents;
