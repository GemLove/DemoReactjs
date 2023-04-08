import React from "react";
import { Row, Col, Divider, Typography, Image, Card, Space} from "antd";
import demo1 from "../../../assets/image/demo1.jpg";
import demo2 from "../../../assets/image/demo2.jpg";
import demo3 from "../../../assets/image/demo3.jpg";
import demo4 from "../../../assets/image/demo4.jpg";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { Meta } = Card;

const img = [demo1, demo2, demo3, demo4];

const ContentComponents= ():JSX.Element=> {
  return (
    <>
      <Divider>
        <Title level={2}>Libary</Title>
      </Divider>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 9]}>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {img.map((item, key:number) => {
            return (
              <Col
                key={key}
                className="gutter-row"
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={6}
              >
                <Space>
                  <Card hoverable cover={  <Image src={item} />}>
                    <Meta
                      title={"This is angel "+(key+1)}
                      description={<Link to={"/picture/demo"+(key+1)}>Detail</Link>}
                    />
                  </Card>
                </Space>
              </Col>
            );
          })}
        </Image.PreviewGroup>
      </Row>
    </>
  );
};

export default ContentComponents;
