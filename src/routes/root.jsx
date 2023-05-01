import Header from '../components/HeaderChild'
import Footer from '../components/FooterChild'
import {Outlet} from "react-router-dom"

export default function Root() {
    return (
      <>
        <header>
            <Header />
        </header>
        <main>
            <div id="detail">
                <Outlet />
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
      </>
    );
  }