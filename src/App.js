
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar.component'
import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercises.component';
import CreateExercises from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import './app.css';

function App() {
  return (
      <>
          <BrowserRouter>
              <Navbar />
              <div className="container">
                  <Routes>
                      <Route path="/" exact element={<ExercisesList />} />
                  </Routes>
                  <Routes>
                      <Route path="/edit/:id" element={<EditExercises />} />
                  </Routes>
                  <Routes>
                      <Route path="/create" exact element={<CreateExercises />} />
                  </Routes>
                  <Routes>
                      <Route path="/user" exact element={<CreateUser />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </>
  );
}

export default App;
