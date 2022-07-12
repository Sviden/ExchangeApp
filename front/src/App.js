import styles from "./styles/topBar.module.scss";
import { TopBar } from "./components/TopBar/TopBar";
import { BrowserRouter as Router} from "react-router-dom";
import { Main } from "./components/MainSection/Main";


function App() {
    return (
        <div className={styles.mainContainer}>
            <Router>
                <TopBar />
            </Router>
            <Main />
        </div>
    );
}

export default App;
