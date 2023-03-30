import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import './form.css';

import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';


function App() {

    const [auth, setAuth] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div className="App">
                <Navigation />

                <Routes>
                    <Route path="/" element={<h2>SNIMKA NA SHTANGI HERE /// if no logged user "nav div.user - display: none;"</h2>} />
                    <Route path="/catalog" element={<h2>TRENIROVKATA NA VSEKI CHOBANIN</h2>} />
                    <Route path="/catalog/:workoutId" element={<h2>DETAILITE ZA TRENIROVKATA NA CHOBANIN X</h2>} />
                    <Route path="/create" element={<h2>MAINE TRENIROVKEN CREATE</h2>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<h2>TRENIROVKATA ZA DNES</h2>} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<h2>404 NOT FOUND MADAFAKA</h2>} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
