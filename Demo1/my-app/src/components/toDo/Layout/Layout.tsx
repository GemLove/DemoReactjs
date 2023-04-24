import React, { useEffect, useState } from "react";

import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import type { ProSettings } from "@ant-design/pro-components";
import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { Input } from "antd";
import defaultProps from "./_defaultProps";
import type { MenuProps } from "antd";
import { Dropdown, Space, Avatar } from "antd";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../../../styles/Gobal.scss";
import { AccountContext } from "../../../context/accountContext";
import { serialize } from "v8";

const clearAcc = {
  username: "",
  accessToken: "",
  refreshToken: "",
};

// const clearAcc = "";

const cookies = new Cookies();

const have = cookies.get("_user");
const NavComponents = (): JSX.Element => {
  const settings: Partial<ProSettings> | undefined = {
    fixSiderbar: true,
    layout: "top",
    splitMenus: true,
  };
  const location = useLocation();

  let [pathname, setPathname] = useState(location.pathname);

  const navigate = useNavigate();

  let [account, setAccount] = useState(have ? cookies.get("_user") : clearAcc);

  // useEffect(() => {
  //   setAccount(cookies.get("_user"));
  //   console.log("Ok")
  // }, [cookies.get("_user").accessToken]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <p
          onClick={() => {
            cookies.remove("_user");
            setAccount(clearAcc);
            // navigate("/home");
            window.location.href = "/home";
          }}
        >
          Logout
        </p>
      ),
    },
  ];
  return (
    <div id="test-pro-layout">
      <ProLayout
        title={"ToDo"}
        {...defaultProps}
        location={{
          pathname,
        }}
        actionsRender={(props) => {
          if (!account.username) {
            if (props.isMobile) {
              return [
                <>
                  <Link to="/login" className="px-2">
                    <UserOutlined />
                  </Link>
                </>,
              ];
            } else {
              return [
                props.layout !== "side" && document.body.clientWidth > 766 ? (
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
                    <Link to="/login" className={"px-1"}>
                      Login
                    </Link>
                    <Link to="/signup" className={"px-1"}>
                      Sign Up
                    </Link>
                  </>
                ) : undefined,
              ];
            }
          }
          return [
            <>
              <Dropdown menu={{ items }} placement="bottomRight">
                <Space className="px-2">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                  {account.username + ""}
                </Space>
              </Dropdown>
            </>,
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
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || "/");
            }}
          >
            <Link to={item.path + ""}>{dom}</Link>
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard style={{ minHeight: 600 }}>
            <AccountContext.Provider value={account}>
              <Outlet></Outlet>
            </AccountContext.Provider>
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default NavComponents;
