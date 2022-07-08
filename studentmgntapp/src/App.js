
import './App.css';
import AddStudent from './routes/AddStudent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import GetAllStudents from './routes/GetAllStudent';
import EditStudent from './routes/EditStudent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/addstudent' element={<AddStudent/>}/>
          <Route path='/' element={<GetAllStudents/>}/>
          <Route path='/editstudent' element={<EditStudent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


