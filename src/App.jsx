import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      {/* <ProtectedRoute exact path="/" component={Home} /> */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      {/* <ProtectedRoute path="/home" element={<Home />} /> */}

      <Route path="/login" element={<Login />} />
      {/* <Route path="/home" element={<Home />} /> */}

      {/* <Route path="/users/*" element={<UserApp />} /> */}
    </Routes>
  );
}
export default App;
