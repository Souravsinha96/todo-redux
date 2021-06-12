export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const CLEAR_TODO = "CLEAR_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETEALL_TODO = "DELETEALL_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}
export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}
export function editTodo(todo) {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
}
export function clearTodo(todoDate) {
  return {
    type: CLEAR_TODO,
    payload: todoDate,
  };
}
export function deleteAllTodo() {
  return {
    type: DELETEALL_TODO,
  };
}
export function completeTodo(todoId) {
  return {
    type: COMPLETE_TODO,
    payload: todoId,
  };
}
