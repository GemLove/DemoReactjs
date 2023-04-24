import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import {Col,Row,Space,Image} from "antd";

const Product = (): JSX.Element => {
  return (
    <>
      <Row justify={"center"} className="px-2">
        <Col xs={24} sm={24} md={12} lg={9} xl={9}>
          The world’s only enterprise blockchain solution for global payments
          <h1> Best Blockchain & Better Than Any Blockchain</h1>
          <p className="text">
            et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga.
          </p>
          <p className="text">
            Cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Webicode -
            Ceo/Founder Chain
          </p>
          <p>Webicode - Ceo/Founder Chain Watch Video How it work</p>
        </Col>
        <Col xs={24} sm={24} md={12} lg={9} xl={9}>
          <Space>
            <Image
              preview={false}
              src="https://demos.webicode.com/html/ico-chain/html/images/chain-img.png"
            />
          </Space>
        </Col>
      </Row>
    </>
  );
};
export default Product;
