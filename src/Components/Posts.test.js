import { shallow } from "enzyme";
import React from "react";
import Post from "./Post";

import Posts from "./Posts";

describe("Posts", () => {
  it("renders three Posts", () => {
    const wrapper = shallow(<Posts />);

    expect(wrapper.find(Post)).toHaveLength(3);
  });
});
