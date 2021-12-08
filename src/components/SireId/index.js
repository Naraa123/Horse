import React, { Component } from "react";
import axios from "axios";
import css from "./style.module.css";

export default class SireId extends Component {
  state = { error: null };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/sire/" + this.props.match.params.id)
      .then((result) => this.setState({ ...result.data.data, error: null }))
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.error) return <div>{this.state.error}</div>;
    return (
      <div>
        <div class="bg-gray-200 px-6 pb-6">
          <p class=" mt-6 mb-1 text-2xl">{this.state.firstname}</p>
          <div class="w-full h-1 bg-gray-800" />
          <div class="flex mt-6">
            <div class=" pr-4 text-xs">
              <img
                className={css.img}
                src={`http://localhost:5000/profile/${this.state.photo}`}
              />
            </div>
            <div class="text-sm">
              <p>
                <b>Овог:</b> {`${this.state.lastname}.`}
              </p>
              <p>
                <b>Нэр:</b> {this.state.firstname}
              </p>
              <p>
                <b>Цол:</b> {this.state.title}
              </p>
              <p>
                <b>Төрсөн нутаг:</b> {this.state.birth_country}
              </p>
              <p>
                <b>Адуу:</b> {this.state.horse}
              </p>
              <p>
                <b>Мэдээлэл:</b> {this.state.other}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
