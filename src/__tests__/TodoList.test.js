import React, { Component, Fragment } from 'react'
// import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../TodoList/TodoItem';
import TodoList from '../TodoList/TodoList';
import Adapter from 'enzyme-adapter-react-16';
const props = {
  list: [1,"hello test",1]
};

// const setup = () => {
//   const wrapper = shallow(<TodoList {...props} />);
//   return {
//     props,
//     wrapper,
//   };
// };

// const setupByRender = () => {
//   const wrapper = render(<TodoList {...props} />);
//   return {
//     props,
//     wrapper,
//   };
// };

// const setupByMount = () => {
//   const wrapper = mount(<TodoList {...props} />);
//   return {
//     props,
//     wrapper,
//   };
// };

// it('should has Button', () => {
//   const { wrapper } = setup();
//   expect(wrapper.find('TodoItem').length).toBe(1);
// });

  // test("should delete todo item correctly", async () => {
  //   jest
  //     .spyOn(TodoApi, "deleteTodo")
  //     .mockImplementation(() => Promise.resolve({}));

  //   await act(async () => {
  //     render(<TodoList />);
  //   });

  //   act(() => {
  //     fireEvent.click(getByTestId(document.body, "delete-button"));
  //   });
  //   await wait(() => expect(TodoApi.deleteTodo).toHaveBeenCalled());
  //   expect(getByTestId(document.body, "task-items")).toBeEmpty();
  // });

  // test("should edit todo item correctly", async () => {
  //   jest
  //     .spyOn(TodoApi, "updateTodo")
  //     .mockImplementation(() => Promise.resolve(updateItem));

  //   await act(async () => {
  //     render(<TodoList />);
  //   });

  //   const textarea = document.querySelector("li textarea");
  //   act(() => {
  //     fireEvent.click(getByTestId(document.body, "edit-button"));
  //     fireEvent.change(textarea, {
  //       target: { value: updateItem.content },
  //     });
  //     fireEvent.blur(textarea);
  //   });

  //   await wait(() => expect(TodoApi.updateTodo).toHaveBeenCalled());
  //   expect(textarea.value).toEqual(updateItem.content);
  // });

  // test("should add todo item correctly", async () => {
  //   jest
  //     .spyOn(TodoApi, "addTodo")
  //     .mockImplementation(() => Promise.resolve(addedItem));

  //   await act(async () => {
  //     render(<TodoList />);
  //   });

  //   act(() => {
  //     fireEvent.change(getByTestId(document.body, "task-input"), {
  //       target: { value: addedItem.content },
  //     });
  //   });

  //   act(() => {
  //     fireEvent.click(getByTestId(document.body, "add-button"));
  //   });
  //   await wait(() => expect(TodoApi.addTodo).toHaveBeenCalled());

  //   const taskItems = getAllByTestId(document.body, "task-item");
  //   expect(taskItems.length).toEqual(2);
  //   expect(taskItems[1]).toHaveTextContent(addedItem.content);
  // });

