import { shallow } from "enzyme";
import React from "react";

import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  it("renders profile text", () => {
    const wrapper = shallow(<UserProfile />);

    expect(wrapper.text()).toEqual(
      ["Jordan Walke", "React Creator", "Lorem Ipsem"].join("")
    );
  });
});
