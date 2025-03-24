import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FavouritesPage from "./pages/FavouritesPage";
import FavouriteDetailPage from "./pages/FavouriteDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function Layout() {
    const location = useLocation();
    const hideNavbar = location.pathname === "/404";

    return (
        <div>
            {!hideNavbar && <Navbar />}  
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/fav" element={<FavouritesPage />} />
                <Route path="/fav-details" element={<FavouriteDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
