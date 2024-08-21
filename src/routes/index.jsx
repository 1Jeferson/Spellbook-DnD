import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home/index';
import SpellDetails from '../components/SpellDetails';

const RoutesConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/spell/:index" element={<SpellDetails />} />
            </Routes>
        </Router>
    );
};
export default RoutesConfig;