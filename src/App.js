import { Routes, Route } from 'react-router-dom';


import Navigation from './components/Navigation';

function App() {
    return (
        <div className="App">
            <Navigation />

            <Routes>
                <Route path="/" element={<h2>SNIMKA NA SHTANGI HERE /// if no logged user "nav div.user - display: none;"</h2>} />
                <Route path="/catalog" element={<h2>TRENIROVKATA NA VSEKI CHOBANIN</h2>} />
                <Route path="/catalog/:workoutId" element={<h2>DETAILITE ZA TRENIROVKATA NA CHOBANIN X</h2>} />
                <Route path="/create" element={<h2>MAINE TRENIROVKEN CREATE</h2>} />
                <Route path="/login" element={<h2>LOGIN FORMA HERE</h2>} />
                <Route path="/register" element={<h2>REGISTER FORMA HERE</h2>} />
                <Route path="/profile" element={<h2>TRENIROVKATA ZA DNES</h2>} />
                <Route path="/logout" element={<h2>DO THE MAGIC AND NAVIGATE (useNavigate + replace) TO HOME</h2>} />
                <Route path="*" element={<h2>404 NOT FOUND MADAFAKA</h2>} />
            </Routes>
        </div>
    );
}

export default App;
