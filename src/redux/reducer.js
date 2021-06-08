import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actions";
export default (
  state = [
    {
      id: 1,
      text: "Hello",
    },
    {
      id: 2,
      text: "Hello SOurav",
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      break;
    case DELETE_TODO:
      let newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;

    case EDIT_TODO:
      break;

    default:
      return state;
  }
};
