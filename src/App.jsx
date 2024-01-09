import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

function App() {
    return (
        <>
            <Router>
                <AdminDashboard/>
                </Router>
        </>
    );
}

export default App;
