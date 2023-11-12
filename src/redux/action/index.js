//action
export const add = "ADD TASK";
export const del = "DELETE TASK";
export const toogle = "TOOGLE TASK";

//action creator

export const addTask = (data) => {
  return {
    type: add,
    payload: data
  };
};

export const deleteTask = (id) => {
  return {
    type: del,
    payload: id
  };
};

export const toogleCompletion = (id, index) => {
  return {
    type: toogle,
    payload: {
      id,
      index
    }
  };
};
