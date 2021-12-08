import React, { Component } from "react";
import axios from "axios";
import css from "./style.module.css";

export default class RaceId extends Component {
  state = { error: null };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/race/" + this.props.match.params.id)
      .then((result) => this.setState({ ...result.data.data, error: null }))
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.error) return <div>{this.state.error}</div>;
    return (
      <div>
        <div class="bg-gray-200 px-6 pb-6">
          <p class=" mt-6 mb-1 text-2xl">{this.state.race_name}</p>
          <div class="w-full h-1  bg-gray-800" />
          <div class="flex mt-6">
            <div class=" pr-4 text-xs">
              <img
                className={css.img}
                src={`http://localhost:5000/profile/${this.state.photo}`}
              />
            </div>
            <div class="text-sm">
              <p>
                <b>Уралдаан:</b> {this.state.race_name}
              </p>
              <p>
                <b>Болох газар:</b> {this.state.race_place}
              </p>
              <p>
                <b>Насны ангилал:</b> {this.state.type}
              </p>
              <p>
                <b>Уралдаан болох өдөр:</b> {this.state.race_date}
              </p>
              <p>
                <b>Уралдаан дуусах өдөр:</b> {this.state.race_end_date}
              </p>
              <p>
                <b>Нэмэлт мэдээлэл:</b> {this.state.info}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
