describe("cypress demo", () => {
  it("renders the default elements on the screen", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-testid=cypress-title]")
      .should("exist")
      .should("have.text", "MapleStoryMatchCards");
  });

  it("toggles between single and multi mode", () => {
    cy.visit("http://localhost:5173");
    cy.get("[data-testid=single-mode]").click();
    cy.get("[data-testid=single-mode]").should(
      "have.class",
      "border-maple-600"
    );
    cy.get("[data-testid=multi-mode]").click();
    cy.get("[data-testid=multi-mode]").should("have.class", "border-maple-600");
  });

  it("visits the game page after clicking READY!! button", () => {
    cy.visit("http://localhost:5173");
    cy.contains("READY!!").click();
    cy.url().should("include", "/game");
    cy.get("[data-testid=skeleton-card]").should("have.length", 30);
  });
});
