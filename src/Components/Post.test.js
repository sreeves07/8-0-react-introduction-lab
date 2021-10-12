import { shallow } from "enzyme";
import React from "react";

import Post from "./Post";

describe("Post", () => {
  it("renders post text", () => {
    const wrapper = shallow(<Post />);

    expect(wrapper.text()).toEqual(["Title", "Lorem Ipsem"].join(""));
  });
});
