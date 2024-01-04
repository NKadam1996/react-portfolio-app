import styles from "./App.module.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Dashboard/>
    </div>
  );
}

export default App;
