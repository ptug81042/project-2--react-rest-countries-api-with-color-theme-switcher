import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import CountryDetailPage from "./pages/CountryDetailPage/CountryDetailPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header title="Where in the world?" />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/country/:code" element={<CountryDetailPage />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;