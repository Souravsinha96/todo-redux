import { ADD_TODO, DELETE_TODO, EDIT_TODO, CLEAR_TODO } from "./actions";
export default (
  state = [
    {
      id: 1,
      text: "Hello",
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
    case CLEAR_TODO:
      return [];
    default:
      return state;
  }
};
