import React from "react";
// import horse1 from "../../img/horse-icon.png";
import css from "./style.module.css";
// import { Layout } from "antd";
// import { home, horse, race, sire } from "../../config/url.config";
import SubMenu from "./SubMenu";
import Menu from "./Menu";
import SideBar from "./SideBar";
import Logo from "./Logo";

// const { Header } = Layout;

const Hdr = (props) => {
  return (
    <header class="flex">
      <Logo />
      <SubMenu toggleSideBar={props.toggleSideBar} />
      <SideBar />
      <nav className={css.HideOnMobile}>
        <Menu />
      </nav>
    </header>
  );
};

export default Hdr;
