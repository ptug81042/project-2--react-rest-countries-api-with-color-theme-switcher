import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import InfoPage from './pages/Info.jsx';
import './pages/Main.css';

export default function App() {
    return (
        <Router>
            <Routes>
                {/* Redirect root "/" to "/home" */}
                <Route path="/" element={<Navigate to="/home" />} />
                
                {/* Home page route */}
                <Route path="/home" element={<HomePage />} />

                {/* Country info page route */}
                <Route path="/info/:countryN" element={<InfoPage />} />
            </Routes>
        </Router>
    );
}