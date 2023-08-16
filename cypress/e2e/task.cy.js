describe("Task Management Feature test", () => {
  beforeEach("successfully loads", () => {
    cy.visit("/");
  });

  //test adding task
  it("adds task sucessfully", () => {
    cy.get(".task_input").type("Apply for a scholarship program");
    cy.get(".task_input_button").click();
    cy.get(".task_list").should("have.length", 1);
    cy.get(".single_task p")
      .last()
      .should("have.text", "Apply for a scholarship program");

    // check if the state is correct
    // cy.window().its('store').invoke('getState').its('tasks').should('have.length', 0);
  });

  //test deleting task
  it("deletes task sucessfully", () => {
    cy.get(".task_input").type("Task to be deleted");
    cy.get(".task_input_button").click();
    cy.get(".delete_btn").first().click();
    cy.get(".task_list").should("have.length", 1);
  });

  //test editing task
  it("edits task sucessfully", () => {
    cy.get(".task_input").type("Task to be edited");
    cy.get(".task_input_button").click();
    cy.get(".edit_btn").first().click();
    cy.get(".edit_input").clear();
    cy.get(".edit_input").type("Now edited");

    cy.get(".confirm_btn").click();
    cy.get(".single_task p").should("have.text", "Now edited");

  });
});
