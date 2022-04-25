import React from 'react';
import Navbar from './components/NavBar';
import ProfileHeader from './components/ProfileHeader';
import BannerImage from './components/BannerImage';
import About from './components/About';
import MyProjects from './components/MyProjects';

function App() {
  return (
    <div className="bg-zinc-300 h-max px-8 py-2">
      <Navbar />
      <BannerImage />
      <ProfileHeader />
      <About />
      <MyProjects />
    </div>
  );
}

export default App;
