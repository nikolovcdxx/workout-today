import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { WorkoutProvider } from './contexts/WorkoutContext';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import CreateSelection from './components/Create/CreateSelection/CreateSelection';
import Push from './components/Create/Push/Push';
import Pull from './components/Create/Pull/Pull';
import Legs from './components/Create/Legs/Legs';
import Details from './components/Details/Details';
import Profile from './components/Profile/Profile';
import Edit from './components/Edit/Edit';

import './form.css';
import './createSelection.css';
import './push.css';
import './catalog.css';
import './details.css';
import './home.css';

function App() {

    return (
        <AuthProvider>
            <div className="App">
                <Navigation />

                <WorkoutProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/create" element={<CreateSelection />} />
                        <Route path="/create/push" element={<Push />} />
                        <Route path="/create/pull" element={<Pull />} />
                        <Route path="/create/legs" element={<Legs />} />
                        <Route path="/workouts" element={<Catalog />} />
                        <Route path="/workouts/:workoutId" element={<Details />} />
                        <Route path="/workouts/:workoutId/edit" element={<Edit />} />
                        <Route path="/my-workout" element={<Profile/>} />
                        <Route path="*" element={<h2>404 NOT FOUND MADAFAKA</h2>} />
                    </Routes>
                </WorkoutProvider>
            </div>
        </AuthProvider>
    );
}

export default App;
