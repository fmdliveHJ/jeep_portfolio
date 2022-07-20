import { Route, Switch } from "react-router-dom";
import "../scss/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

//sub
import Jeeplife from "../pages/Jeeplife";
import Community from "../pages/Community";
import Gallery from "../pages/Gallery";
import Media from "../pages/Media";
import Location from "../pages/Location";
import Join from "../pages/Join";
import Main from "../pages/Main";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as types from "../redux/actionType";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: types.GALLERY.start,
      Opt: { type: "user", count: 50, user: "195814985@N05" },
    });
    dispatch({ type: types.YOUTUBE.start });
    dispatch({ type: types.MEMBER.start });
    dispatch({ type: types.PICS.start });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        {/* 서브용 header */}
        <Route path="/" render={() => <Header type={"sub"} />} />
      </Switch>
      <Route path="/jeeplife" component={Jeeplife} />
      <Route path="/community" component={Community} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/media" component={Media} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />

      <Footer />
    </>
  );
}

export default App;
