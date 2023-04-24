import React, { useState, useLayoutEffect } from "react";
import Navigation from "./layout/navbar/Navbar";
import Home from "./layout/home/Home";
import Product from "./layout/product/Product";
import Introduction from "./layout/introduction/Introduction";

const LayoutComponent = (): JSX.Element => {
  const clamp = (value: number) => Math.max(0, value);

  const isBetween = (value: number, floor: number, ceil: number) =>
    value >= floor && value <= ceil;

  const useScrollspy = (ids: string[], offset: number = 0): string => {
    const [activeId, setActiveId] = useState("");

    useLayoutEffect(() => {
      const listener = () => {
        const scroll = window.pageYOffset;

        const position = ids
          .map((id) => {
            const element = document.getElementById(id);

            if (!element) return { id, top: -1, bottom: -1 };

            const rect = element.getBoundingClientRect();
            const top = clamp(rect.top + scroll - offset);
            const bottom = clamp(rect.bottom + scroll - offset);

            return { id, top, bottom };
          })
          .find(({ top, bottom }) => isBetween(scroll, top, bottom));

        setActiveId(position?.id || "home");
      };

      listener();

      window.addEventListener("resize", listener);
      window.addEventListener("scroll", listener);

      return () => {
        window.removeEventListener("resize", listener);
        window.removeEventListener("scroll", listener);
      };
    }, [ids, offset]);
    return activeId;
  };
  const ids = ["home", "introduction", "product"];
  let active = useScrollspy(ids, 0);
  return (
    <>
      <div className="wrap">
        <Navigation active={active} ></Navigation>
        <section className="simple-head">
          <Home></Home>
        </section>
        <div id="content">
          <section key={"introduction"} id="introduction">
            <Introduction></Introduction>
          </section>
          <section key={"product"} id="product">
            <Product></Product>
          </section>
        </div>
      </div>
    </>
  );
};

export default LayoutComponent;
