import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toogleCompletion } from "../redux/action";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Weekly() {
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
        <div className="flex week">
          <div className="">
            <div className="title">{t.title}</div>
            <div className="flex days">
              {t.dates.map((date, index) => {
                const d = new Date(date.year, date.month - 1, date.date);
                const formattedDate = d.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                });

                return (
                  <div>
                    <div>{formattedDate}</div>
                    <div
                      className={`${
                        date.none
                          ? "circle black"
                          : date.completed
                          ? "circle green"
                          : "circle red"
                      }`}
                      onClick={() => handleToogle(t.id, index)}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div onClick={() => handleDelete(t.id)} className="delete-week">
            <AiFillDelete style={{ fontSize: "25px" }} />
          </div>
        </div>
      ))}
      <Link to="/">Daily</Link>
    </div>
  );
}
