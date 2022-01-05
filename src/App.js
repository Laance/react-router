import React from 'react';
import './App.css';
import  {Route, Routes,Link,BrowserRouter as Router} from 'react-router-dom';
import Posts from './components/posts/Posts';
import HomePage from './components/home/HomePage';
import MainContactsApp from './components/contacts/MainPage';
import ImageApp from './components/images/Images';


function App() {
  return (
    <Router>
    <div>
    <div class="container">
      <header class="main">
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/images">Images</Link>
      </header>
      </div>
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/contacts" element={<MainContactsApp />}></Route>
      <Route path="/images" element={<ImageApp/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
