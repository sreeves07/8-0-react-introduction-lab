import React from "react";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import Post from "./Components/Post"
import "./index.css";


const App = () => {
  return (
    <div>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </div>
  )
};

export default App;
