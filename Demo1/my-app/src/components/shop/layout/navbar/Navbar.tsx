import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuProps, Layout, Row, Col, Space, ConfigProvider } from "antd";
import { defaultProps } from "./_defaultProps";
import logo from "../../../../assets/image/fav.gif";
const Header = Layout;
const Navbar = (props: any): JSX.Element => {
  const [current, setCurrent] = useState("home");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setCurrent(props.active);
  }, [props.active]);

  const token = {
    colorPrimary: "white",
    colorBgContainer: "transparent",
    colorText: "white",
    lineWidth: 0,
    lineWidthBold: 3,
    motionDurationSlow: "0.3s",
    colorTextLightSolid: "red",
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ConfigProvider theme={{ token }}>
        <Header
          className={
            "navbar py-1 " + (scrollPosition > 10 ? "navbar-dark" : "")
          }
        >
          <Row justify={"space-around"}>
            <Col>
              <Space
                className="logo"
                align="baseline"
                style={{ width: "100%" }}
              >
                <img src={logo} style={{ width: "54px" }} />
                <Menu
                  className="py-1"
                  style={{ fontWeight: "bolder" }}
                  onClick={onClick}
                  forceSubMenuRender={true}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={defaultProps}
                />
              </Space>
            </Col>
          </Row>
        </Header>
      </ConfigProvider>
      ;
    </>
  );
};
export default Navbar;
