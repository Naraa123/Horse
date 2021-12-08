import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/horseActions";
// import * as actions from "../../../redux/actions/loginActions";
import Spinner from "../../Spinner";

class HorseLoad extends Component {
  state = {
    horses: [],
    userId: [],
    error: null,
    loading: false,
  };

  componentDidMount = () => {
    //this.setState({ loading: true });
    // const token = localStorage.getItem("token");
    // const userId = localStorage.getItem("userId");
    // if (token) {
    //   this.props.autoLogin(token, userId);
    // }

    this.props.loadHorses(this.props.userId);
    this.setState({ userId: this.props.userId });
    // axios
    //   .get(`http://localhost:5000/horsesM?userId=${userId}`)
    //   .then((result) =>
    //     this.setState({ loading: false, horses: result.data.data })
    //   )
    //   .catch(
    //     (err) => this.setState({ loading: false, error: err.response })
    //     //console.log(err)
    //   );
  };

  render() {
    console.log("clg heseg: " + this.state.userId);
    return (
      <div class="bg-gray-300">
        <p class="mx-6 pt-6 mb-1 text-xl">Гарал үүсэл</p>
        <div class="mx-6 h-1  bg-gray-800" />
        <div class="flex flex-wrap justify-center">
          {this.state.loading ? (
            <Spinner />
          ) : (
            this.props.horses.map((el) => (
              <div>
                <div class="p-6">
                  <a
                    class="font-mono text-lg"
                    // href={`/horses/ID-${el.id}`}
                  >
                    {el[1].name}
                  </a>
                  <Link to={`/horses/ID-${el[1]._id}`}>
                    <img
                      href={`/horses/ID-${el[1]._id}`}
                      class="h-60 w-60 bg-gray-600"
                      src={`http://localhost:5000/profile/${el[1].photo}`}
                    />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    horses: state.horseReducer.horses,
    userId: state.signUpInReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadHorses: (userId) => dispatch(actions.loadHorses(userId)),
    // autoLogin: (token, userId) =>
    //   dispatch(actions.loginUserSuccess(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorseLoad);
