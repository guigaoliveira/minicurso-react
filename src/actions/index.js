export const addTodo = data => {
  return {
    type: "ADD_TODO",
    data
  };
};
export const resetTodo = () => {
  return {
    type: "RESET_TODO"
  };
};
