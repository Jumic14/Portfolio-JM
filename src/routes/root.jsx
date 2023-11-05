import HeaderChild from "../components/HeaderChild";
import FooterChild from "../components/FooterChild";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <HeaderChild />
      </header>
      <main>
        <div id="detail">
          <Outlet />
        </div>
      </main>
      <footer>
        <FooterChild />
      </footer>
    </>
  );
}
