import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;