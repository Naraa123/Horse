import React, { Component } from "react";
import axios from "axios";
import sharga from "../../../img/sharga.jpg";
import css from "./style.module.css";
import { connect } from "react-redux";

import Tree from "../../Tree";
import RaceToHorses from "../../Races/Race-To-Horses";

class HorseId extends Component {
  state = {
    name: null,
    error: null,
    horseId: null,
    success: null,
    deleted: null,
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/horse/" + this.props.match.params.id)
      .then((result) => this.setState({ ...result.data.data, error: null }))
      .catch((err) => console.log(err));
  };

  HorseEdit = () => {
    this.props.history.push(`/horses/edit/ID-${this.state.id}`);
  };

  HandleDelete = () => {
    const token = localStorage.getItem("token");
    this.setState({ success: null });
    axios
      .delete("http://localhost:5000/horse/" + this.props.match.params.id, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        // this.goBack();
        this.setState({
          deleted: true,
        });
      })
      .catch((err) => {
        this.setState({ error: err.response.data.error.message });
        //console.log(err)
      });
  };

  render() {
    return (
      <>
        {this.state.error && <div>{this.state.error}</div>}
        {this.state.deleted && (
          <div class="m-2 bg-blue-100 border-t border-b border-green-500 text-green-700 px-4 py-3">
            Амжилттай устгагдлаа
          </div>
        )}

        <div class="flex">
          <div class="bg-gray-400 px-6">
            <p class=" mt-6 mb-1 text-2xl">{this.state.name}</p>
            <div class="w-full h-1  bg-gray-800" />
            <div class="flex mt-6">
              <div class="pr-4">
                <img
                  className={css.img}
                  src={`http://localhost:5000/profile/${this.state.photo}`}
                />
              </div>
              <div class="text-sm">
                <p>
                  <b>Нэр:</b> {this.state.name}
                </p>
                <p>
                  <b>Эцэг:</b> {this.state.father}
                </p>
                <p>
                  <b>Эх:</b> {this.state.mother}
                </p>
                <p>
                  <b>Үүлдэр: </b> {this.state.origin}
                </p>
                <p>
                  <b>Угшил: </b> {this.state.pedigree}
                </p>
                <p>
                  <b>Зүс: </b> {this.state.color}
                </p>
                <p>
                  <b>Хүйс: </b> {this.state.gender}
                </p>
                <p>
                  <b>Уяач: </b> {this.state.sire}
                </p>
                <p>
                  <b>Эзэн: </b> {this.state.owner}
                </p>
                <p>
                  <b>Нутаг: </b> {this.state.country}
                </p>
                <p>
                  <b>Мэдээлэл: </b> {this.state.info}
                </p>
                {this.props.logged && (
                  <div class="my-6 text-center">
                    <button
                      class="mb-1 px-4 py-2  font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={this.HorseEdit}
                    >
                      Засварлах
                    </button>
                    <button
                      class=" px-4 py-2 mx-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={this.HandleDelete}
                    >
                      Устгах
                    </button>
                  </div>
                )}
                {/* <div class="my-6 text-center">
                  <button
                    class="mb-1 px-4 py-2  font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={this.HorseEdit}
                  >
                    Засварлах
                  </button>
                  <button
                    class=" px-4 py-2 mx-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={this.HandleDelete}
                  >
                    Устгах
                  </button>
                </div> */}
              </div>
            </div>

            <Tree />
            <div>
              <p class="mt-6 mb-1 text-xl">Гаргасан амжилт</p>
              <div class="w-full h-1  bg-gray-800" />
              <div class="mt-6 w-1/2">
                <i class="h-80 w-50">{this.state.award}</i>
              </div>
            </div>
          </div>
          <nav className={css.HideOnMobile}>
            <RaceToHorses />
          </nav>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { logged: state.signUpInReducer.userId };
};

export default connect(mapStateToProps)(HorseId);
//npm add json-server --hiih
