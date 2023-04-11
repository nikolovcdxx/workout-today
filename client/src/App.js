import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import { WorkoutContext } from './contexts/WorkoutContext';
import * as workoutService from './services/workoutService';

import './form.css';
import './createSelection.css';
import './push.css';
import './catalog.css';

import Catalog from './components/Catalog/Catalog';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import CreateSelection from './components/Create/CreateSelection/CreateSelection';
import Push from './components/Create/Push/Push';
import Pull from './components/Create/Pull/Pull';
import Legs from './components/Create/Legs/Legs';
import Edit from './components/Edit/Edit';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {

    const [auth, setAuth] = useLocalStorage('auth', {});
    const [workouts, setWorkouts] = useState([]);

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    useEffect(() => {
        workoutService.getAll()
            .then(result => {
                setWorkouts(result);
            });
    }, []);

    const workoutAdd = (workoutData) => {
        setWorkouts(state => [
            ...state,
            workoutData
        ]);
    };

    const workoutEdit = (workoutId, workoutData) => {
        setWorkouts(state => state.map(x => x._id === workoutId ? workoutData : x));
    };

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div className="App">
                <Navigation />

                <WorkoutContext.Provider value={{ workouts, workoutAdd, workoutEdit }}>
                    <Routes>
                        <Route path="/" element={<h2>SNIMKA NA SHTANGI HERE</h2>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/create" element={<CreateSelection />} />
                        <Route path="/create/push" element={<Push />} />
                        <Route path="/create/pull" element={<Pull />} />
                        <Route path="/create/legs" element={<Legs />} />
                        <Route path="/workouts" element={<Catalog />} />
                        <Route path="/workouts/:workoutId" element={<h2>DETAILITE ZA TRENIROVKATA NA CHOBANIN X</h2>} />
                        <Route path="/workouts/:workoutId/edit" element={<Edit />} />
                        <Route path="/profile" element={<h2>TRENIROVKATA ZA DNES</h2>} />
                        <Route path="*" element={<h2>404 NOT FOUND MADAFAKA</h2>} />
                    </Routes>
                </WorkoutContext.Provider>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
