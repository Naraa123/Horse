import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Sire extends Component {
  state = { sires: [], error: null };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/sire")
      .then((result) => this.setState({ sires: result.data.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div class="bg-gray-300 text-center p-5">
        <p class="mb-1 text-2xl">Уралдаан</p>
        <div class="w-full h-1 mb-5 bg-gray-800" />
        <div class="flex flex-wrap justify-center">
          {this.state.sires.map((el) => (
            <div class="p-6">
              <Link to={`/sire/ID-${el.id}`}>
                <a class="font-mono text-lg">{el.firstname}</a>
                <img
                  class="h-60 w-60 bg-gray-600"
                  src={`http://localhost:5000/profile/${el.photo}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
