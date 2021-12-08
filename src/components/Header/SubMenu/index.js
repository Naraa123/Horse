import React from "react";
import css from "./style.module.css";

const SubMenu = (props) => {
  return (
    <button
      onClick={props.toggleSideBar}
      class="flex items-center bg-gray-800 md:hidden  p-6"
    >
      <button
        id="nav-toggle"
        class="p-2 border rounded-full text-gray-500 border-gray-500 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-4 w-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V0zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </button>
  );
};

export default SubMenu;
