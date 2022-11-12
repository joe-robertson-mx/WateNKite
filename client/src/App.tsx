import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SetOverview from './pages/SetOverview';
import SetEdit from './pages/SetEdit';
import WorkoutEdit from './pages/WorkoutEdit';
import WorkoutOverview from './pages/WorkoutOverview';
import moment from 'moment';


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/sets" element={<SetOverview />} />
       <Route path="/setedit" element={<SetEdit weight={10} reps={10} type='Bench Press' />} />
       <Route path="/" element={<WorkoutOverview />} />
       <Route path="/workoutedit" element={<WorkoutEdit name='New Workout' date={moment()} />} />
     </Routes>
    </div>
  );
}

export default App;
