import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HorseList extends Component {
  state = {
    horses: [],
    error: null,
    loading: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("http://localhost:5000/horse")
      .then((result) =>
        this.setState({ loading: false, horses: result.data.data })
      )
      .catch(
        (err) => this.setState({ loading: false, error: err.response })
        //console.log(err)
      );
  };

  render() {
    return (
      <div class="bg-gray-300">
        <div class="pt-6 flex justify-between w-full">
          <p class="mx-6 text-xl">Гарал үүсэл</p>
          {this.props.logged && (
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <a
                class="pr-6 text-right "
                onClick={() => {
                  window.location = "/horses/create";
                }}
              >
                Удам нэмэх
              </a>
            </div>
          )}
        </div>

        <div class="mx-6 h-1 mt-1 bg-gray-800" />
        <div class="flex flex-wrap justify-center">
          {this.state.horses.map((el) => (
            <div class="p-6">
              <a class="font-mono text-lg" href={`/horses/ID-${el.id}`}>
                {el.name}
              </a>
              <Link to={`/horses/ID-${el.id}`}>
                <img
                  href={`/horses/ID-${el.id}`}
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

const mapStateToProps = (state) => {
  return { logged: state.signUpInReducer.userId };
};

export default connect(mapStateToProps)(HorseList);
