import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toogleCompletion } from "../redux/action";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Daily() {
  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToogle = (id, index) => {
    dispatch(toogleCompletion(id, index));
  };

  return (
    <div>
      {task.map((t) => (
        <div className="flex task">
          <div className="title">{t.title}</div>
          <div style={{ display: "flex" }}>
            <div
              className={`${
                t.dates[6].none
                  ? "circle black"
                  : t.dates[6].completed
                  ? "circle green"
                  : "circle red"
              }`}
              onClick={() => handleToogle(t.id, 6)}
            ></div>
            <div onClick={() => handleDelete(t.id)} className="delete">
              <AiFillDelete style={{ fontSize: "25px" }} />
            </div>
          </div>
        </div>
      ))}
      <Link to="/weekly">Weekly</Link>
    </div>
  );
}
