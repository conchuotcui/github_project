
import "./App.css";
import HomePage from "./components/User/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

import User from "./components/User/User";
import Login from "./components/User/Login/Login";
import Cart from "./components/User/Cart/Cart";
import CardPay from "./components/User/CardPay/CardPay";
import Dealhot from "./components/User/HomePage/Dealhot";
import Productworlk from "./components/User/HomePage/Productworlk";
import Filterproduct from "./components/User/HomePage/Filterproduct";
import Shareinfo from "./components/User/HomePage/Shareinfo";
import Assistant from "./components/User/HomePage/Assistant";
import Bachhoamy from "./components/User/HomePage/Bachhoamy";
import Megavita from "./components/User/HomePage/Megavita";
import UserFillter from "./components/User/UserProfile/UserFillter";
import Codesales from "./components/User/HomePage/Codesales";
import Signup from "./components/User/Login/Singup";
import Thanhtoandathang from "./components/User/Cart/Thanhtoandathang";
import Admin from "./components/Admin/Admin";
import { AuthProvider } from "./components/User/Header/AuthContext ";
import MoreUser from "./components/Admin/AdminUser/MoreUser";
import DetailOrderItem from "./components/Admin/AdminOrder/DetailOrderItem";
import AddDealhot from "./components/Admin/AdminDealhot/AddDealhot";

function App() {
  return (
    <div className="app-container">
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer /> */}
      <AuthProvider>
        <Routes>
          <Route path="/" element={<User />}>
            <Route index element={<HomePage />} />
            <Route path="/Dealhot" element={<Dealhot />} />
            <Route path="/UserFillter" element={<UserFillter />} />
            <Route path="/cardPay/:productId" element={<CardPay />} />
            <Route path="/productworlk" element={<Productworlk />} />
            <Route
              path="/:lavelOne/:lavelTwo/:lavelThree"
              element={<Filterproduct />}
            />
            <Route path="/filterproduct/:dealhotId" element={<Filterproduct />} />
            <Route path="/filterproduct/" element={<Filterproduct />} />
            <Route path="/Shareinfo" element={<Shareinfo />} />
            <Route path="/Assistant" element={<Assistant />} />
            <Route path="/Bachhoamy" element={<Bachhoamy />} />
            <Route path="/Megavita" element={<Megavita />} />
            <Route path="/Codesales" element={<Codesales />} />

            <Route path="/Cart" element={<Cart />} />
          </Route>

          <Route path="/Thanhtoandathang" element={<Thanhtoandathang />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/MoreUser" element={<MoreUser />} />
          <Route path="/DetailOrderItem" element={<DetailOrderItem />} />
          <Route path="/AddDealhot/:dealhotId/:brandId" element={<AddDealhot />} />


          <Route path="/Admin/*" element={<Admin />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
