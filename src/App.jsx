import { isMobile } from "react-device-detect";

import "./App.css";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <>
      {isMobile ? <MobileHeader isMobile={isMobile} /> : <Header />}
      <AppRoutes />
    </>
  );
}

export default App;
