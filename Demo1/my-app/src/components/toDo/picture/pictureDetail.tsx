import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Image,
  Card,
  Layout,
  Button,
  Affix,
  Dropdown,
  MenuProps,
  Space,
} from "antd";
import {
  ArrowLeftOutlined,
  DashOutlined,
  UploadOutlined,
  LinkOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import demo from "../../../assets/image/demo1.jpg";
import demo2 from "../../../assets/image/demo2.jpg";
import demo3 from "../../../assets/image/demo3.jpg";
import demo4 from "../../../assets/image/demo4.jpg";
const { Title } = Typography;
const { Header } = Layout;

const img = [demo, demo2, demo3, demo4];
const headerStyle: React.CSSProperties = {
  paddingInline: 10,
  backgroundColor: "white",
};

const ContentComponents = (): JSX.Element => {
  const [top, setTop] = useState(10);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];
  return (
    <>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 9]}>
        <Col className="gutter-row" xs={0} sm={0} md={0} lg={2} xl={2}>
          <Affix offsetTop={top}>
            <Button type="text" shape="circle" size="large">
              <Link to="/picture">
                <ArrowLeftOutlined style={{ fontSize: 25 }} />
              </Link>
            </Button>
          </Affix>
        </Col>

        <Col className="gutter-row" xs={24} sm={24} md={24} lg={20} xl={20}>
          <Card hoverable>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 0]}>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={13}
                lg={13}
                xl={13}
              >
                <Image src={demo2} />
              </Col>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={11}
                lg={11}
                xl={11}
              >
                <Header style={headerStyle}>
                  <Row>
                    <Col className="gutter-row" span={12}>
                      <Button type="text" shape="circle" size="large">
                        <DashOutlined />
                      </Button>
                      <Button type="text" shape="circle" size="large">
                        <UploadOutlined />
                      </Button>
                      <Button type="text" shape="circle" size="large">
                        <LinkOutlined />
                      </Button>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <Space>
                        <Dropdown menu={{ items }} placement="bottom">
                          <a onClick={(e) => e.preventDefault()}>
                            Profile
                            <DownOutlined />
                          </a>
                        </Dropdown>
                        <Button shape="round">Save</Button>
                      </Space>
                    </Col>
                  </Row>
                </Header>
                <Title>Demo</Title>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="gutter-row" xs={0} sm={0} md={0} lg={2} xl={2}></Col>
      </Row>
    </>
  );
};

export default ContentComponents;
