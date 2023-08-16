describe("Task Management Feature test", () => {
  beforeEach("successfully loads", () => {
    cy.visit("/");
  });

  //test adding task
  it('should add a new task', () => {

    const taskText = 'New Task to Add';

    cy.get('[data-testid="task-input"]').type(taskText);
    cy.get('[data-testid="add-task-button"]').click();
  });

  //test deleting task
  it('should delete a task', () => {

    const taskToDeleteIndex = 0; 

    const taskText = 'New Task to Add';

    cy.get('[data-testid="task-input"]').type(taskText);
    cy.get('[data-testid="add-task-button"]').click();

    cy.get('.task').eq(taskToDeleteIndex).find('[data-testid="delete-task-button"]').click();

    });

    it('should edit a task', () => {

      const taskText = 'New Task to Add';
      cy.get('[data-testid="task-input"]').type(taskText);
      cy.get('[data-testid="add-task-button"]').click();

      const taskToEditIndex = 0;
      const editedTaskText = 'Edited Task';
  
      cy.get('.task').eq(taskToEditIndex).find('[data-testid="edit-task-button"]').click();
      cy.get('.task').eq(taskToEditIndex).find('[data-testid="task-input"]').clear().type(editedTaskText);
      cy.get('.task').eq(taskToEditIndex).find('[data-testid="save-edit-button"]').click();
  
    });
  
     //test completing task
     it('should toggle task completion status', () => {

      const taskText1 = 'New Task one to Add';
      cy.get('[data-testid="task-input"]').type(taskText1);
      cy.get('[data-testid="add-task-button"]').click();

      const taskText2 = 'New Task two to Add';
      cy.get('[data-testid="task-input"]').type(taskText2);
      cy.get('[data-testid="add-task-button"]').click();
  
      const taskToCompleteIndex = 1;
  
      cy.get('.task').eq(taskToCompleteIndex).find('.complete_btn').click();  
      cy.get('.task p').eq(taskToCompleteIndex).should('have.class', 'line-through');
    });
  
  
    it('should filter tasks based on completed and incomplete', () => {

      
      const taskText1 = 'New Task one to Add';
      cy.get('[data-testid="task-input"]').type(taskText1);
      cy.get('[data-testid="add-task-button"]').click();

      const taskText2 = 'New Task two to Add';
      cy.get('[data-testid="task-input"]').type(taskText2);
      cy.get('[data-testid="add-task-button"]').click();

      const taskText3 = 'New Task three to Add';
      cy.get('[data-testid="task-input"]').type(taskText3);
      cy.get('[data-testid="add-task-button"]').click();

      cy.get('.task').eq(0).find('.complete_btn').click();  

  
      cy.get('[data-testid="filter-complete"]').check();

      cy.get('.task').should('have.length', 1);

      cy.get('[data-testid="filter-complete"]').uncheck();
  
      cy.get('[data-testid="filter-incomplete"]').check();

      cy.get('.task').should('have.length', 2);

    });
  
  });

 