import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Dashboard/>
      <About/>
    </div>
  );
}

export default App;
