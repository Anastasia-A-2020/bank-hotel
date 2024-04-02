import { isMobile } from "react-device-detect";

import "./App.scss";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./AppRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "./redux/slices/appSlice";

function App() {
  const dispatch = useDispatch();
  const isShowMobileMenu = useSelector(store => store.app.isShowMobileMenu);

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [dispatch]);

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      {!isShowMobileMenu && <AppRoutes />}
    </>
  );
}

export default App;
