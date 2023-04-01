import React, { ReactNode, useState } from "react";

import { SearchOutlined,UserOutlined} from "@ant-design/icons";
import type { ProSettings } from "@ant-design/pro-components";
import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { Input } from "antd";
import defaultProps from "./_defaultProps";
import "../../styles/Gobal.css";
import Content from "./Content";
import { Outlet, Link } from "react-router-dom";

const NavComponents = (): JSX.Element => {
  const settings: Partial<ProSettings> | undefined = {
    fixSiderbar: true,
    layout: "top",
    splitMenus: true,
  };

  const [pathname, setPathname] = useState("/Home");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div id="test-pro-layout">
      <ProLayout
        title={"ToDo"}
        bgLayoutImgList={[
          {
            src:
              "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
            left: 85,
            bottom: 100,
            height: "303px",
          },
          {
            src:
              "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
            bottom: -68,
            right: -45,
            height: "303px",
          },
          {
            src:
              "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
            bottom: 0,
            left: 0,
            width: "331px",
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        // avatarProps={{
        //   src:
        //     "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
        //   size: "small",
        //   title:" chua cos",
        // }}
        actionsRender={(props) => {
          if (props.isMobile) return [(
            <>
                <Link to="/login" >
                <UserOutlined />
                </Link>
            </>
          )];
          return [
            props.layout !== "side" && document.body.clientWidth > 1000 ? (
              <>
                <div
                  key="SearchOutlined"
                  aria-hidden
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 24,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <Input
                    style={{
                      borderRadius: 4,
                      marginInlineEnd: 12,
                    }}
                    prefix={<SearchOutlined />}
                    placeholder="Search..."
                    bordered={false}
                  />
                </div>
                <Link to="/login" className={"py-0"}>
                  Login
                </Link>
                <Link to="/signup" className={"py-0"}>
                  Sign Up
                </Link>
              </>
            ) : undefined,
          ];
        }}
        footerRender={(props) => {
          return (
            <div
              style={{
                textAlign: "center",
                paddingBlockStart: 12,
                backgroundColor: "#FFFFFF",
              }}
            >
              <div>© 2023 Made with love</div>
              <div>by GL</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || "/Home");
            }}
          >
            {item.hideInMenu}
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              minHeight: 500,
            }}
          >
            <Content></Content>
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default NavComponents;
