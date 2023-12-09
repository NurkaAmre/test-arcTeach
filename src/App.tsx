
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/Tasklist'

function App() {
  

  return (
    <div>
      <Header />
      <TaskForm />
      <TaskList />
      <Footer />
    </div>
  )
}

export default App
