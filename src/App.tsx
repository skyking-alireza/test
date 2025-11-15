import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home.tsx";
import Wallet from "./Wallet.tsx";
import Notifications from "./Notifications.tsx";
import Support from "./Support.tsx";
import Ticket from "./Ticket.tsx";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/ticket" element={<Ticket />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
