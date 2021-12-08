import React, { Component } from "react";
//global state eese awahad redux tai holbono
import { connect } from "react-redux";
import * as actions from "./redux/actions/loginActions";
import { Result, Button } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history1 from "./history";
import MainLayout from "./components";
import Login2 from "./views/Login2";

import "./services/interceptor";
import { user } from "./config/url.config";
import "./App.css";

class App extends Component {
  //state = { token: null, name: null };

  // handleLogin = (token) => {
  //   // this.setState({ token });
  //   localStorage.setItem("token", token);
  //   console.log("Logged in token .. " + token);
  //   this.router.history.push("/horses");
  // };

  // handleLogout = () => {
  //   localStorage.removeItem("token");
  //   this.setState({ token: null });
  //   console.log("Log Out >> ... ");
  // };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token) {
      this.props.autoLogin(token, userId);
    }
  };

  render() {
    return (
      //<Provider>
      <Router
        history={history1}
        ref={(router) => {
          this.router = router;
        }}
      >
        {/* {this.state.token} */}
        {/* {this.state.name} */}
        <Switch>
          <Route
            path={"/login2"}
            render={() => <Login2 onLogin={this.handleLogin} />}
          />
          <Route
            path={"/"}
            render={() => <MainLayout onLogout={this.handleLogout} />}
          />
          <Route
            component={() => (
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
              />
            )}
          />
        </Switch>
      </Router>
      //</Provider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
  };
};

export default connect(null, mapDispatchToProps)(App);
