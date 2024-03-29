import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider, useSelector } from "react-redux";
import TaskList from "../features/tasks/TaskList";
import TaskInput from "../features/tasks/TaskInput";
import Task from "../features/tasks/Task";
import TaskFilter from "../features/tasks/TaskFilter";
import { store} from "../app/store"
import { tasksSelector } from "../features/tasks/tasksSlice";
describe("Task Management App", () => {

  // test("Adding a task", () => {
  //   render(
  //     <Provider store={store}>
  //       <TaskInput />
  //     </Provider>
  //   );

    // const inputElement = screen.getByTestId("task-input");
    // const addButton = screen.getByTestId("add-task-button");

    // fireEvent.change(inputElement, { target: { value: "New Task" } });
    // fireEvent.click(addButton);
  // });

  // test("Assert the new added task", () => {
  //   render(
  //     <Provider store={store}>
  //       <Task
  //         task={{ id: "1", content: "New Task", status: false }}
  //         index={0}
  //       />
  //     </Provider>
  //   );

  //   const taskContent = screen.getByTestId("task-content-0");
  //   expect(taskContent).toHaveTextContent("New Task");
  // });

  test("Deleting a task", () => {
    render(
      <Provider store={store}>
        <Task index={0} task={{ id: '1', content: "Deleted task", status: false }} />
      </Provider>
    );
  
    // Find the delete button for the first task
    const deleteButton = screen.getByTestId("delete-button-0");
  
    // Simulate a click on the delete button
    fireEvent.click(deleteButton);
  
    // Assert that the deleted task is no longer in the document
    const deletedTask = screen.queryByTestId("task-content-0");
    expect(deletedTask).toBeNull();

  });

  // test("Editing a task", () => {
  //   render(
  //     <Provider store={store}>
  //       <Task index={0} task={{id: '0', content: "Deleted task", status: false}} />
  //     </Provider>
  //   );

  //   const editButton = screen.getByTestId("edit-task-button-0");
  //   fireEvent.click(editButton);

  //   const editInput = screen.getByTestId("edit-input-0");
  //   fireEvent.change(editInput, { target: { value: "Edited Task" } });

  //   const confirmButton = screen.getByTestId("confirm-button-0");
  //   fireEvent.click(confirmButton);

  //   const taskContent = screen.getByTestId("task-content-0");
  //   expect(taskContent).toHaveTextContent("Edited Task");
  // });

  // test("Completing a task", () => {
  //   render(
  //     <Provider store={store}>
  //       <TaskFilter/>
  //       <TaskInput/>
  //       <Task index={0} task={{id: '0', content: "filtered tasks", status: false}} />
  //     </Provider>
  //   );

  //   const inputElement = screen.getByTestId("task-input");
  //   const addButton = screen.getByTestId("add-task-button");

  //   fireEvent.change(inputElement, { target: { value: "New Task" } });
  //   fireEvent.click(addButton);

  //   const completeCheckbox = screen.getByTestId("complete-checkbox");
  //   fireEvent.click(completeCheckbox);

  //   const taskContent = screen.getByTestId("task-content-0");
  //   expect(taskContent).toHaveClass("line-through");
  // });

});

