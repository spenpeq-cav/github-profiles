import { useState } from "react";
import { ProfileData } from "../App"

type NavProps = {
    passProfileData: React.Dispatch<React.SetStateAction<ProfileData>>
    passRepoData: React.Dispatch<React.SetStateAction<never[]>>
};

function Navbar(props: NavProps) {
    const [profileQuery, setProfileQuery] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('https://api.github.com/users/' + profileQuery)
        const data = await response.json()
        props.passProfileData(data)

        const repoResponse = await fetch(data.repos_url)
        const repoData = await repoResponse.json()
        props.passRepoData(repoData)
    }

    return (
        <div className="flex items-center justify-between h-20">
            <h1 className='flex-auto text-2xl font-bold text-zinc-300 text-left'>
                Github Profiles
            </h1>
            <form className='text-zinc-900 flex-auto text-right' onSubmit={handleSubmit}>
                <input value={profileQuery} onChange={e => {
                    setProfileQuery(e.target.value);
                }} type='text' placeholder='Search profile...' className="rounded-sm w-2/5 py-2 px-4" />
                <button type="submit" className="bg-zinc-300 rounded-sm px-4 ml-1 py-2 font-semibold">Search</button>
            </form>
        </div>
    )
}
export default Navbar;