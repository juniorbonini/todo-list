import Header from "../core-components/header";
import MainContent from "../core-components/main-content";
import FooterContent from "../core-components/footer-content";
import { Outlet } from "react-router";

export default function LayoutMain() {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <FooterContent />
    </>
  );
}
