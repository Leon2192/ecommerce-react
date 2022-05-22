import "./App.css";
import CheckOut from "./components/CkeckOut";
import NavBar from "./components/Navbar";
import "./styles/globals.css";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import Checkout from "./components/Checkout/CheckOut";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="checkout" element={<CheckOut />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="checkout-page" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
