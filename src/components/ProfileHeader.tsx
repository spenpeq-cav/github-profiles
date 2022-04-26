type ProfileHeaderProps = {
    avatar_url: string
    name: string
}

function ProfileHeader(props: ProfileHeaderProps) {
    return (
        <div className="flex flex-row pt-6 pb-3 border-b-2">
            <img className="rounded-full h-28" src={props.avatar_url ? props.avatar_url : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} alt="Profile" />
            <div className="pl-4 pt-8 flex flex-col">
                <h1 className="font-bold text-xl">{props.name ? props.name : "Name"}</h1>
                <div className="flex flex-row pt-6">
                    <button className="pr-4">About</button>
                    <button>My projects</button>
                </div>
            </div>
        </div>
    )
}
export default ProfileHeader;