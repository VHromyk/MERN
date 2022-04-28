import './app.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar.component'

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      {/* <Route path="/" exact component={<p>Heloo</p>} />
      <Route path="/edit/:id" exact component={ExercisesList} />
      <Route path="/create" exact component={ExercisesList} />
      <Route path="/user" exact component={ExercisesList} /> */}
    </Router>
  );
}

export default App;
