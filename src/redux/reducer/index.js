import { add, del, toogle } from "../action/index";

const initialTasks = {
  task: []
};

export const taskReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case add:
      return {
        ...state,
        task: [...state.task, action.payload]
      };
    case del:
      return {
        ...state,
        task: state.task.filter((each) => each.id !== action.payload)
      };
    case toogle:
      return {
        ...state,
        task: state.task.map((each) => {
          if (each.id === action.payload.id) {
            return {
              ...each,
              dates: each.dates.map((date, index) => {
                if (index === action.payload.index) {
                  return {
                    ...date,
                    completed: !date.completed,
                    none: false
                  };
                } else {
                  return date;
                }
              })
            };
          } else {
            return each;
          }
        })
      };
    default:
      return state;
  }
};
