import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import React, { Suspense, } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { setInitializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import Footer from "./components/footer/footer";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const Login = React.lazy(() => import("./components/LoginF/Login"));

class App extends React.Component {
  componentDidMount() {
    this.props.setInitializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <Footer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Dialogs" element={<Suspense fallback={<Preloader />}><DialogsContainer /></Suspense>}/>
            <Route path="/Content" element={<ContentContainer />}>
              <Route path=":userId" element={<ContentContainer />} />
            </Route>
            <Route path="/Users" element={<UsersContainer />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Login" element={<Suspense fallback={<Preloader />}><Login /></Suspense>}/>
          </Routes>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(connect(mapStateToProps, { setInitializeApp }))(App);
