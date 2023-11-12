import { Outlet } from "react-router-dom";
import Input from "./Input";

const Layout = () => {
  return (
    <>
      <div className="help">
        <div className="flex-help">
          <div className="help-circle black"></div>
          <div>None</div>
        </div>
        <div className="flex-help">
          <div className="help-circle red"></div>
          <div>Not Done</div>
        </div>
        <div className="flex-help">
          <div className="help-circle green"></div>
          <div> Done</div>
        </div>
      </div>
      <Input />

      <Outlet />
    </>
  );
};

export default Layout;
