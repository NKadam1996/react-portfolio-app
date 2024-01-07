import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/contact";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Dashboard />
      <About />
      <Experience />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
