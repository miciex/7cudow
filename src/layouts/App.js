import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="outer-wrapper">
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <section className="content">
            <Page />
          </section>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
