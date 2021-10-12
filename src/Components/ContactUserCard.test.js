import { shallow } from "enzyme";
import React from "react";

import ContactUserCard from "./ContactUserCard";

describe("ContactUserCard", () => {
  it("renders ContactUserCard text", () => {
    const wrapper = shallow(<ContactUserCard />);

    expect(wrapper.text()).toEqual(
      ["Jordan Walke", "React Creator", "Lorem Ipsem"].join("")
    );
  });
});
