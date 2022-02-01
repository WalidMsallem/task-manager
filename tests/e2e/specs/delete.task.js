import { mockyDate } from "../helper/data";
import { developHost } from "../helper/hosts";

describe("Test Scenario: Delete task", () => {
  it("opens the app", () => {
    cy.visit(developHost);
  });

  it("Load data after click on button", () => {
    cy.get("[data-cy=fetch-data]").click();
  });

  it("Delete the first task", () => {
    cy.wait(1500);
    cy.get("[data-cy=card-actions]").first().invoke("show");
    cy.get("[data-cy=delete-task-button]").first().invoke("show").click();
  });

  it("Check the element is deleted from the DOM", () => {
    cy.get("[data-cy=tasks-list-container]").should(
      "not.have.text",
      mockyDate[0].voice
    );
    cy.get("[data-cy=tasks-list-container]").should(
      "not.have.text",
      mockyDate[0].text
    );
  });
});
