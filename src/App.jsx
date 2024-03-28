import { isMobile } from "react-device-detect";

import "./App.scss";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./AppRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsMobile } from "./redux/slices/appSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [dispatch]);

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <AppRoutes />
    </>
  );
}

export default App;
