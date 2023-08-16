import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You might need to install this package
import TaskList from './TaskList';
import Task from './Task';

describe('Task Management App', () => {
  const initialState = {
    tasks: [
      // Your initial tasks state here
    ],
  };

  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('Adding a task', () => {
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const inputElement = screen.getByTestId('task-input');
    const addButton = screen.getByTestId('add-task-button');

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    const taskContent = screen.getByTestId('task-content-0');
    expect(taskContent).toHaveTextContent('New Task');
  });

  test('Deleting a task', () => {
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const deleteButton = screen.getByTestId('delete-button-0');
    fireEvent.click(deleteButton);

    const taskContent = screen.queryByTestId('task-content-0');
    expect(taskContent).toBeNull();
  });

  test('Editing a task', () => {
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const editButton = screen.getByTestId('edit-task-button');
    fireEvent.click(editButton);

    const editInput = screen.getByTestId('edit-input-0');
    fireEvent.change(editInput, { target: { value: 'Edited Task' } });

    const confirmButton = screen.getByTestId('confirm-button-0');
    fireEvent.click(confirmButton);

    const taskContent = screen.getByTestId('task-content-0');
    expect(taskContent).toHaveTextContent('Edited Task');
  });

  test('Completing a task', () => {
    render(
      <Provider store={store}>
        <TaskList />
      </Provider>
    );

    const completeCheckbox = screen.getByTestId('complete-checkbox-0');
    fireEvent.click(completeCheckbox);

    const taskContent = screen.getByTestId('task-content-0');
    expect(taskContent).toHaveClass('line-through');
  });
});
