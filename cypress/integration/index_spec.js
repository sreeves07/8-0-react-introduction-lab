describe("App Hierarchy", () => {
  it("should have a NavBar component", () => {
    cy.react("NavBar").should("exist");
  });

  it("should have a UserProfile component", () => {
    cy.react("UserProfile").should("exist");
  });

  describe("Posts component", () => {
    it("should have a Posts component", () => {
      cy.react("Posts").should("exist");
    });

    it("should have at least three Post components", () => {
      cy.react("Post").should("have.length.gte", 3);
    });
  });

  describe("Contacts component", () => {
    it("should have a Contacts component", () => {
      cy.react("Contacts").should("exist");
    });

    it("should have at least three ContactUserCard components", () => {
      cy.react("ContactUserCard").should("have.length.gte", 3);
    });
  });
});
