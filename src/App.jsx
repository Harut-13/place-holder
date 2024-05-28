import './App.css'
import { Route, Routes } from 'react-router-dom';
import Post from './components/Posts/Post';
import Comments from './components/comments/comments';
function App() {

  return (
      <div >
        <h1>
        <Routes>
          <Route path='/' element={<Post/>}/>
          <Route path='/' element={<Comments/>}/>
        </Routes>
        </h1>
      </div>

  )
}

export default App
