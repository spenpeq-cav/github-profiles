import React, { useState } from 'react';
import Navbar from './components/NavBar';
import ProfileHeader from './components/ProfileHeader';
import BannerImage from './components/BannerImage';
import About from './components/About';
import MyProjects from './components/MyProjects';

export interface ProfileData {
  avatar_url: string
  bio: string
  location: string
  name: string
  repos_url: string
}

function App() {
  const emptyProfileData = {
    avatar_url: "",
    bio: "",
    location: "",
    name: "",
    repos_url: "",
  }

  const [profileData, setProfileData] = useState<ProfileData>(emptyProfileData)

  return (
    <div className="bg-zinc-300 h-max px-8 py-2">
      <Navbar passProfileData={setProfileData} />
      <BannerImage />
      <ProfileHeader avatar_url={profileData.avatar_url} name={profileData.name} />
      <About bio={profileData.bio} location={profileData.location} />
      <MyProjects />
    </div>
  );
}

export default App;
