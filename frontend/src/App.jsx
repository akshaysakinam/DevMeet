import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import Hero from "./Hero";
import SignUp from "./SignUp";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Feed from "./Feed.jsx";

function App() {
  return (
    <>
      <Provider store={appStore}> 
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Hero/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/feed" element={<Feed/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
