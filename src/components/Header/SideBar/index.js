import React from "react";
import Shadow from "../../Shadow";
import Logo from "../Logo";
import Menu from "../Menu";

import css from "./style.module.css";
const SideBar = (props) => {
  let classes = [css.SideBar, css.Close];

  if (props.closeSideBar) {
    classes = [css.SideBar, css.Open];
  }

  return (
    <div>
      <Shadow show={props.closeSideBar} onclicked={props.toggleSideBar} />
      <div onClick={props.toggleSideBar} className={classes.join(" ")}>
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
