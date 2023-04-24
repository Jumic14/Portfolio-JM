import Header from './../components/Header'
import Footer from './../components/Footer'
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