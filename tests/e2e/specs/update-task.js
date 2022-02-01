import { mockyDate, newTask } from "../helper/data";
import { developHost } from "../helper/hosts";

describe("Test Scenario: Update task", () => {
  it("opens the app", () => {
    cy.visit(developHost);
  });

  it("Load data after click on button", () => {
    cy.get("[data-cy=fetch-data]").click();
  });

  it("Click on title/voice", () => {
    cy.get("[data-cy=title-container]").first().click();
    cy.get("[data-cy=title-input]")
      .first()
      .should("have.value", mockyDate[0].voice);
  });

  it("Update title/voice", () => {
    cy.get("[data-cy=title-input]").clear();
    cy.get("[data-cy=title-input]").type(newTask.voice);
  });

  it("On blur to fire the save event", () => {
    cy.get("[data-cy=title-input]").first().blur();
  });

  it("Check the new element if it is added in the DOM", () => {
    cy.get("[data-cy=tasks-list-container]").first().contains(newTask.voice);
  });
});
