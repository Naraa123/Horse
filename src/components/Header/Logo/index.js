import React from "react";
import horse1 from "../../../img/horse-icon.png";
//import { Layout } from "antd";
import { home, horse, race, sire } from "../../../config/url.config";
import Menu from "../Menu";

//const { Header } = Layout;

const Logo = () => {
  return (
    <div class="flex flex-wrap items-center justify-between bg-gray-800 w-full p-2 z-10 top-0">
      <div class="flex flex-row items-center flex-shrink-0 text-white">
        <img src={horse1} class="h-20 w-20" alt="" />
        <a class="uppercase pl-3 font-medium text-2xl" href="/">
          Гарал үүсэл
        </a>
      </div>
    </div>
  );
};

export default Logo;
