import React, { Component } from "react";
import axios from "axios";
// import sharga from "../../img/sharga.jpg";
// import css from "./style.module.css";

export default class HorseEdit extends Component {
  state = { name: null, error: null, horseId: null, success: null };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/horse/" + this.props.match.params.id)
      .then((result) => this.setState({ ...result.data.data, error: null }))
      .catch((err) => {
        this.setState({ error: err.response.data.error.message });
        //console.log(err)
      });
  };

  handleSave = () => {
    const token = localStorage.getItem("token");
    const userId = this.props.userId;
    this.setState({ success: null });
    axios
      .put(
        "http://localhost:5000/horse/" + this.props.match.params.id,
        {
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
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => {
        console.log(result);
        this.goBack();
        this.setState({
          ...result.data.data,
          error: null,
          success: "Амжилттай хадгалагдлаа :)",
        });
      })
      .catch((err) => {
        this.setState({ error: err.response.data.error.message });
        //console.log(err)
      });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleType = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: null, success: null });
  };

  render() {
    return (
      <>
        {this.state.error && (
          <div
            class="m-2 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
            role="alert"
          >
            {this.state.error}
          </div>
        )}
        {this.state.success && (
          <div
            class="m-2 bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
            role="alert"
          >
            {this.state.success}
          </div>
        )}

        <div class="flex justify-center px-6 my-6">
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <img
              class="w-full h-1/2 bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              src={`http://localhost:5000/profile/${this.state.photo}`}
            />
            <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 class="pt-4 text-2xl text-center">{this.state.name}</h3>
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
                    onClick={this.handleSave}
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
      </>
    );
  }
}
