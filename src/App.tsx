import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/Tasklist';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TaskForm />} />
          <Route path="/tasks" element={<TaskList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

