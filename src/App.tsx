import React from 'react';
import Navbar from './components/NavBar';
import ProfileHeader from './components/ProfileHeader';
import BannerImage from './components/BannerImage';

function App() {
  return (
    <div className="bg-zinc-300 h-screen px-8 py-2">
      <Navbar />
      <BannerImage />
      <ProfileHeader />
    </div>
  );
}

export default App;
