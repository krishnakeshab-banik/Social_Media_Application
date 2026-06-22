import React from 'react'
import { Route, Routes } from 'react-router-dom'
import login from './pages/login.jsx'
import Feed from './pages/feed.jsx'
import Messages from './pages/messages.jsx'
import Chatbox from './components/chatbox.jsx'
import Connections from './pages/connections.jsx'
import Discover from './pages/discover.jsx'
import Profile from './pages/profile.jsx'
import CreatePost from './components/createPost.jsx'

const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<login />} >
     <Route index element={<Feed/>}>
     <Route path='messages/' element={<Messages/>}/>
     <Route path='messages/:userId=' element={<Chatbox/>}/>
     <Route path='connections' element={<Connections/>}/>
     <Route path='discover' element={<Discover/>}/>
     <Route path='profile/:profileId' element={<Profile/>}/
     <Route path='create-post' element={<CreatePost/>}/>

     =</Route>
    </Route>
  </Routes>
    </>
  )
}

export default App