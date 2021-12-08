import React, { Component } from "react";
import axios from "axios";
import horseBack from "../../../img/horse-background.jpg";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/horseActions";

import Spinner from "../../Spinner";

class HorseCreate extends Component {
  state = {
    name: null,
    father: null,
    mother: null,
    pedigree: null,
    color: null,
    gender: null,
    sire: null,
    owner: null,
    country: null,
    info: null,
    loading: false,
    error: null,
  };

  saveHorseM = () => {
    const newHorse = {
      userId: this.props.userId,
      name: this.state.name,
      father: this.state.father,
      mother: this.state.mother,
      pedigree: this.state.pedigree,
      color: this.state.color,
      gender: this.state.gender,
      sire: this.state.sire,
      owner: this.state.owner,
      country: this.state.country,
      info: this.state.info,
    };
    this.props.saveHorseAction(newHorse);
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleType = (e) => {
    const { name, value } = e.target;
    this.setState(
      { [name]: value }
      // this.setState({ [name]: value, error: null, success: null }
    );
  };

  render() {
    console.log(this.props.error);
    return (
      <>
        {/* {this.state.error && (
          <div
            class="m-2 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
            role="alert"
          >
            {this.state.error}
          </div>
        )} */}
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div class="flex justify-center px-6 my-6">
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
              <img
                class="w-full h-2/3 bg-gray-600 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                src={horseBack}
              />
              <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 class="pt-4 text-2xl text-center">
                  {/* {this.state.name} */}
                </h3>
                <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Нэр
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleType}
                      // onChange={this.changeName}
                    />
                  </div>
                  <div class="mb-4">
                    <label class=" mb-2 text-sm font-bold text-gray-700">
                      Эцэг
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="father"
                      value={this.state.father}
                      onChange={this.handleType}
                      // onChange={this.changeFather}
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Эх
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="mother"
                      value={this.state.mother}
                      onChange={this.handleType}
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class=" mb-2 text-sm font-bold text-gray-700"
                      for="lastName"
                    >
                      Угшил
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="pedigree"
                      onChange={this.handleType}
                      value={this.state.pedigree}
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Зүс
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="color"
                      onChange={this.handleType}
                      value={this.state.color}
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Хүйс
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="gender"
                      onChange={this.handleType}
                      value={this.state.gender}
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class=" mb-2 text-sm font-bold text-gray-700"
                      for="lastName"
                    >
                      Уяач
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="sire"
                      onChange={this.handleType}
                      value={this.state.sire}
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Эзэн
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="owner"
                      onChange={this.handleType}
                      value={this.state.owner}
                    />
                  </div>

                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="firstName"
                    >
                      Нутаг
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="country"
                      onChange={this.handleType}
                      value={this.state.country}
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class=" mb-2 text-sm font-bold text-gray-700"
                      for="lastName"
                    >
                      Мэдээлэл
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="info"
                      onChange={this.handleType}
                      value={this.state.info}
                    />
                  </div>

                  <div class="mb-6 text-center">
                    <button
                      class=" px-4 py-2  font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={this.saveHorseM}
                    >
                      Хадгалах
                    </button>
                    {/* <button class=" px-4 py-2 mx-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" type="button">Устгах</button> */}
                    <button
                      class=" px-4 py-2 mx-4 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={this.goBack}
                    >
                      Буцах
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newHorseS: state.horseReducer.newHorse,
    userId: state.signUpInReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveHorseAction: (newHorse) => dispatch(actions.saveHorse(newHorse)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorseCreate);
