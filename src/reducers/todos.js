const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.data];
    case "RESET_TODO":
      return [];
    default:
      return state;
  }
};

export default todos;
