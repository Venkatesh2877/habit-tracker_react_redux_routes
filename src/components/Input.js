import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action";

export default function Input() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const d = today.getDate();
    const mon = today.getMonth() + 1;
    const year = today.getFullYear();

    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const currentDate = new Date(year, mon - 1, d - i);
      dates.push({
        completed: false,
        none: true,
        date: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear()
      });
    }

    const t = {
      title: task,
      dates: dates,
      id: Date.now()
    };
    dispatch(addTask(t));
    setTask("");
  };

  return (
    <div className="input-box">
      <form>
        <input
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
