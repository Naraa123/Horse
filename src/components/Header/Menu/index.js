import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

import { connect } from "react-redux";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {/* <MenuItem link="/horses">Horses</MenuItem> */}
      <MenuItem link="/horses">МОРЬ</MenuItem>
      <MenuItem link="/uyach">УЯАЧ</MenuItem>

      {props.logged ? (
        <>
          <MenuItem link="/udam">УДАМ</MenuItem>
          <MenuItem link="/race">УРАЛДААН</MenuItem>
          <MenuItem link="/logout">ГАРАХ</MenuItem>
        </>
      ) : (
        <>
          <MenuItem link="/login">НЭВТРЭХ</MenuItem>
          {/* <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem> */}
        </>
      )}
      {/* <MenuItem link="/login">НЭВТРЭХ</MenuItem> */}
      {/* <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem> */}
      {/* <a link={props.onLogout}>Гарах</a> */}
      {/* <MenuItem link="/medee">МЭДЭЭ</MenuItem> */}
      {/* <MenuItem link="/tuhai">ТУХАЙ</MenuItem> */}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return { logged: state.signUpInReducer.userId };
};

export default connect(mapStateToProps)(Menu);
