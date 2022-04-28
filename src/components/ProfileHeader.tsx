type ProfileHeaderProps = {
    avatar_url: string
    name: string
    passAboutActive: React.Dispatch<React.SetStateAction<boolean>>
    passProjectsActive: React.Dispatch<React.SetStateAction<boolean>>
}

function ProfileHeader(props: ProfileHeaderProps) {
    const handleClickAbout = () => {
        props.passAboutActive(true) 
        props.passProjectsActive(false)
        console.log("Clicked")
    }
    const handleClickProjects = () => {
        props.passAboutActive(false) 
        props.passProjectsActive(true)
        console.log("Clicked")
    }

    return (
        <div className="flex flex-row pt-6 pb-3 border-b-2 mx-36 bg-zinc-900 border-zinc-300">
            <img className="rounded-full h-36" src={props.avatar_url ? props.avatar_url : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} alt="Profile" />
            <div className="pl-4 pt-8 flex flex-col">
                <h1 className="font-bold text-3xl text-zinc-300">{props.name ? props.name : "Name"}</h1>
                <div className="flex flex-row pt-6">
                    <button type="button" className="pr-4 text-zinc-400 text-lg font-semibold" onClick={handleClickAbout}>About</button>
                    <button type="button" className="text-zinc-400 text-lg font-semibold" onClick={handleClickProjects}>My Projects</button>
                </div>
            </div>
        </div>
    )
}
export default ProfileHeader;