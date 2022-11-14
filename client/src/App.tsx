import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SetOverview from './pages/SetOverview';
import SetNewEdit from './pages/SetNewEdit';
import WorkoutNewEdit from './pages/WorkoutNewEdit';
import WorkoutOverview from './pages/WorkoutOverview';


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/setoverview/:workoutid" element={<SetOverview />} />
       <Route path="/setedit/:workoutid/:setid" element={<SetNewEdit />} />
       <Route path="/setedit/:workoutid" element={<SetNewEdit />} />
       <Route path="/" element={<WorkoutOverview />} />
       <Route path="/workoutedit" element={<WorkoutNewEdit />} />
        <Route path="/workoutedit/:workoutid" element={<WorkoutNewEdit />} />
     </Routes>
    </div>
  );
}

export default App;
