import { shallow } from "enzyme";
import React from "react";

import App from "./App";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";

describe("App", () => {
  it("renders NavBar, UserProfile, Posts, and Contacts", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(NavBar).exists()).toBe(true);
    expect(wrapper.find(UserProfile).exists()).toBe(true);
    expect(wrapper.find(Posts).exists()).toBe(true);
    expect(wrapper.find(Contacts).exists()).toBe(true);
  });
});
