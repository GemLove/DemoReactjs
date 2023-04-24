import type { MenuProps } from "antd";

export const defaultProps: MenuProps["items"] = [
  {
    label: <a href={"#home"}>Trang chủ</a>,
    key: "home",

  },
  {
    label: <a href={"#introduction"}>Giới thiệu</a>,
    key: "introduction",

  },

  {
    label: <a href={"#product"}>Sản phẩm</a>,
    key: "product",
  },
  {
    label:<a href={"#contact"}>Liên hệ</a>,
    key: "contact",
  },
  {
    label:<a href={"#feedback"}>Đánh giá</a>,
    key: "feedback",
  },
  {
    label:<a href={"#service"}>Dịch vụ</a> ,
    key: "service",
  },
];
