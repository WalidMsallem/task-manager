import { newTask } from "../helper/data";
import { developHost } from "../helper/hosts";

describe("Test Scenario: Add task to the list", () => {
  it("opens the app", () => {
    cy.visit(developHost);
  });

  it("Load data after click on button", () => {
    cy.get("[data-cy=fetch-data]").click();
  });

  it("Open add task form", () => {
    cy.get("[data-cy=open-add-item-form]").click();
  });
  it("Check the rendering of the form", () => {
    cy.get("[data-cy='create-task-section']").should("be.visible");
    cy.get("[data-cy='create-task-section']").contains("Voice name");
    cy.get("[data-cy='create-task-section']").contains("Description");
  });
  it("Fill in the voice/title field", () => {
    cy.get("[data-cy='input-voice-name']").type(newTask.voice);
  });

  it("Fill in the description field", () => {
    cy.get("[data-cy='input-voice-description']").type(newTask.text);
  });

  it("Submit the form", () => {
    cy.get("[data-cy=submit-add-task]").click();
  });

  it("Check the new element if it is added in the DOM", () => {
    cy.get("[data-cy=tasks-list-container]").last().contains(newTask.voice);
  });
});
