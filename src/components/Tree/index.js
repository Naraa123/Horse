import React, { Component } from "react";
import { horse } from "../../config/url.config";
import mn from "../../img/mongolia-logo.png";
import axios from "axios";

class Tree extends Component {
  state = {
    horses: [],
    error: null,
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/horse")
      .then((result) => this.setState({ horses: result.data.data }))
      .catch((err) => console.log(err));
  };

  aaaaa = () => {
    this.state.horses.map((el) => el.name);
  };

  render() {
    console.log(this.state.horses);
    return (
      <div>
        <div>{this.props.name}</div>
        <p class="mt-6 mb-1 text-xl">Гарал үүсэл</p>
        <div class="w-full h-1 bg-gray-800" />
        <div class="mt-6 grid grid-flow-col grid-rows-16 text-center ">
          <a
            onClick={() => {
              window.location = "/horses/ID-1";
            }}
            class="flex justify-center pt-20  bg-gray-300 border  row-span-8"
          >
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Амгалан төрийн ажнай шарга
          </a>

          <a
            onClick={() => {
              window.location = "/horses/ID-2";
            }}
            class="flex justify-center pt-8 bg-gray-300 border  row-span-4"
          >
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/3/33/Mn_flag_arkhangai_aimag_2014.png"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Толин хул
          </a>
          <a class="flex justify-center pt-8  border  row-span-4">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Mn_flag_bayan_olgiy_aymag.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Шарга
          </a>
          <a class="flex justify-center pt-2 bg-gray-300 border  row-span-2">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/2/27/Mn_flag_bayankhongor_aymag.png"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Бор
          </a>
          <a class="flex justify-center pt-2  border  row-span-2">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/9/9d/Mn_flag_bulgan_aimag.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Хээр
          </a>
          <a class="flex justify-center pt-2 bg-gray-300 border  row-span-2">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Алаг
          </a>
          <a class="flex justify-center pt-2  border  row-span-2">
            {/* <img src={mn} class="h-3 w-5 m-1" alt="" /> */}
            Халзан
          </a>
          <a class=" flex justify-center bg-gray-300 border h-5">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Халзан
          </a>
          <a class="  flex justify-center border h-5 ">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Хонгор
          </a>
          <a class="flex justify-center bg-gray-300 border h-5 ">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Хул
          </a>
          <a class=" flex justify-center  border h-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Хар Алаг
          </a>
          <a class="  flex justify-center bg-gray-300 border h-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Хээр Алаг
          </a>
          <a class="  flex justify-center border h-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/f/f0/Mn_flag_darkhan_uul_aymag.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Хилэн хүрэн
          </a>
          <a class=" flex justify-center bg-gray-300 border h-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/3/3d/Mn_flag_govis%C3%BCmber_aimag.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Шарга
          </a>
          <a class=" flex justify-center  border h-5">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/5/51/Mn_flag_govi-altai_aimag_2011.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Халиун
          </a>
        </div>
        <div class="grid grid-flow-col grid-rows-16 text-center ">
          <a
            onClick={() => {
              window.location = horse.horses;
            }}
            class="flex justify-center pt-20  bg-gray-300 border  row-span-8"
          >
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
              }
              class="h-3 w-5 m-1"
              alt=""
            />
            Эцэг
          </a>

          <a class="flex justify-center pt-8 bg-gray-300 border  row-span-4">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Хүрэн
          </a>
          <a class="flex justify-center pt-8  border  row-span-4">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Шарга
          </a>
          <a class="flex justify-center pt-2 bg-gray-300 border  row-span-2">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Бор
          </a>
          <a class="flex justify-center pt-2  border  row-span-2">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Хээр
          </a>
          <a class="flex justify-center pt-2 bg-gray-300 border  row-span-2">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Алаг
          </a>
          <a class="flex justify-center pt-2  border  row-span-2">
            {/* <img src={mn} class="h-3 w-5 m-1" alt="" /> */}
            Халзан
          </a>
          <a class=" flex justify-center bg-gray-300 border h-5">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Халзан
          </a>
          <a class="  flex justify-center border h-5 ">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Хонгор
          </a>
          <a class="flex justify-center bg-gray-300 border h-5 ">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Хул
          </a>
          <a class=" flex justify-center  border h-5">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Хар Алаг
          </a>
          <a class="  flex justify-center bg-gray-300 border h-5">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Хээр Алаг
          </a>
          <a class="  flex justify-center border h-5">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Хилэн хүрэн
          </a>
          <a class=" flex justify-center bg-gray-300 border h-5">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Шарга
          </a>
          <a class=" flex justify-center  border h-5">
            <img src={mn} class="h-3 w-5 m-1" alt="" />
            Халиун
          </a>
        </div>
      </div>
    );
  }
}

export default Tree;
