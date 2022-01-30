import React from 'react';
import './App.css';
import './components/SocialPosts.css';
import './components/PostForm.css';
import { SocialPosts } from './components/SocialPosts';
import { PostForm } from './components/PostForm';

function App() {

  return (
    <div className="App">
        <h1>myThoughts</h1>
        <SocialPosts></SocialPosts>
    </div>
  );
}

export default App;