/// <reference types="cypress"/>

it("GoogleTest", () => {
    cy.visit("https://www.google.com/")
    cy.wait(3000)
    cy.get(".gLFyf").type("automation testing")
    cy.contains("Google Search").click()
    cy.wait(5000)
    cy.title().should("equal", "automation testing - Google Search")
  })