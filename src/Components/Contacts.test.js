import { shallow } from "enzyme";
import React from "react";
import ContactUserCard from "./ContactUserCard";

import Contacts from "./Contacts";

describe("Contacts", () => {
  it("renders four ContactUserCards", () => {
    const wrapper = shallow(<Contacts />);

    expect(wrapper.find(ContactUserCard)).toHaveLength(4);
  });
});
