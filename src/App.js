import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Registation from "./Pages/Login/Registation";
import RequireAuth from "./Pages/Shared/RequireAuth";
import AppointmentBanner from "./Pages/Appointment/AppointmentBanner";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import Revew from "./Pages/Dashboard/Revew";
import MyHistory from "./Pages/Dashboard/MyHistory";
import AllUsers from "./Pages/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Shared/RequireAdmin";
import AddDoctors from "./Pages/Dashboard/AddDoctors";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>}></Route>

        <Route
          path="appintment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="reveiw" element={<Revew></Revew>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route
            path="alluser"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addoctor"
            element={
              <RequireAdmin>
                <AddDoctors></AddDoctors>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="managedoctor"
            element={
              <RequireAdmin>
                <ManageDoctor></ManageDoctor>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="revew" element={<Reviews></Reviews>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="registaion" element={<Registation></Registation>} />
      </Routes>
    </div>
  );
}

export default App;
