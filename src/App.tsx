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
  const [repoData, setRepoData] = useState([])
  const [aboutActive, setAboutActive] = useState<boolean>(true)
  const [projectsActive, setProjectsActive] = useState<boolean>(false)
  
  return (
    <div className="bg-zinc-900 h-max px-8 py-2">
      <Navbar passProfileData={setProfileData} passRepoData={setRepoData} />
      <BannerImage />
      <ProfileHeader avatar_url={profileData.avatar_url} name={profileData.name} passAboutActive={setAboutActive} passProjectsActive={setProjectsActive} />
      <About active={aboutActive} bio={profileData.bio} location={profileData.location} />
      <MyProjects active={projectsActive} repoData={repoData} />
    </div>
  );
}

export default App;
