import React, { Component, useLayoutEffect } from "react";
import css from "./style.module.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import {
  comment,
  home,
  horse,
  pedigree,
  race,
  sire,
  user,
  userInfo,
} from "../config/url.config";
import { Layout } from "antd";

import SireList from "../views/sire";
import MoriList from "../views/horse";
import PedList from "../views/pedigree";
import CommentList from "../views/comment";
import UserList from "../views/user";
import Login from "../views/login";
import Logout from "../views/Logout";

import Foot from "./Footer";
import Header from "./Header";
import SideBar from "./Header/SideBar";
import HorseId from "./Horse/HorseId";
import Horses from "./Horse/Horses";
import HorseEdit from "./Horse/HorseEdit";
import HorseCreate from "./Horse/HorseCreate";
import Race from "./Races/Race";
import RaceId from "./Races/RaceId";
import Sire from "./Sire";
import SireId from "./SireId";
import Signup from "../views/Signup";
import HorseLoad from "./Horse/HorseLoad";

const { Content } = Layout;

class MainLayout extends Component {
  state = {
    // showSideBar: true,
    closeSideBar: false,
    token: null,
    name: null,
    // confirmSideBar: false,
  };

  handleLogin = (token) => {
    // this.setState({ token });
    localStorage.setItem("token", token);
    console.log("Logged in token .. " + token);
    this.router.history.push("/horses");
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ token: null });
    console.log("Log Out >> ... ");
  };

  // ShowSideBar = (type) => {
  //   this.setState({ showSideBar: true });
  // };

  // CloseSideBar = () => {
  //   this.setState({ showSideBar: false });
  // };
  openSideBar = () => {
    this.setState((umnuhState) => {
      return { showSideBar: !umnuhState.showSideBar };
    });
  };

  toggleSideBar = () => {
    this.setState((umnuhState) => {
      return { closeSideBar: !umnuhState.closeSideBar };
    });
  };

  // const history = useHistory();

  // useEffect(() => {
  //   if (!state.login) {
  //     history.push("/auth/login");
  //   }
  // }, [state]);

  // useLayoutEffect(() => {
  //   // if (!localStorage.getItem(auth.token)) {
  //   //   history.push(auth.signin);
  //   // }
  //   //eslint-disable-next-line
  // }, []);
  render() {
    return (
      <Layout show={this.state.confirmOrder}>
        <div className={css.Gadnah}>
          <div
            className={css.Big}
            // class="font-sans leading-normal tracking-normal lg:absolute bg-gray-400 lg:left-60 lg:right-60 md:absolute md:left-10 md:right-10"
          >
            <Header
              toggleSideBar={this.toggleSideBar}
              // onLogout={this.handleLogout}
            />
            <SideBar
              closeSideBar={this.state.closeSideBar}
              toggleSideBar={this.toggleSideBar}
            />
            <Layout className="site-layout">
              <Content>
                <Router //history={history}
                  ref={(router) => {
                    this.router = router;
                  }}
                >
                  {/* User Name: {this.props.userId} */}
                  <Switch>
                    <Route
                      path={user.signin}
                      render={() => <Login onLogin={this.handleLogin} />}
                    />
                    <Route
                      path={"/signup"}
                      component={Signup}
                      // render={() => <Login2 onLogin={this.handleLogin} />}
                    />
                    <Route exact path={"/"} render={() => <Horses />} />
                    <Route exact path={"/horses"} render={() => <Horses />} />
                    <Route path="/horses/ID-:id" component={HorseId} />
                    <Route path="/horses/edit/ID-:id" component={HorseEdit} />
                    <Route
                      exact
                      path="/horses/create"
                      component={HorseCreate}
                    />
                    <Route path="/horses/load" component={HorseLoad} />
                    <Route exact path={"/race"} render={() => <Race />} />
                    <Route path="/race/ID-:id" component={RaceId} />
                    <Route exact path={"/sire"} render={() => <Sire />} />
                    <Route path="/sire/ID-:id" component={SireId} />
                    <Route path={"/udam"} render={() => <MoriList />} />
                    <Route path={"/uyach"} render={() => <SireList />} />
                    <Route
                      path={pedigree.pedigrees}
                      render={() => <PedList />}
                    />
                    <Route
                      path={comment.comments}
                      render={() => <CommentList />}
                    />
                    <Route exact path="/user" render={() => <UserList />} />
                    <Route path={"/logout"} component={Logout} />
                    {/* <Route path="/login" render={() => <Login />} /> */}
                  </Switch>
                </Router>
              </Content>
            </Layout>
            <Foot />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.signUpInReducer.userId };
};

export default connect(mapStateToProps)(MainLayout);
