import { ProfileData } from "../App"

type NavProps = {
    passProfileData: React.Dispatch<React.SetStateAction<ProfileData>>
};

function Navbar(props: NavProps) {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('https://api.github.com/users/spenpeq')
        const data = await response.json()
        props.passProfileData(data)
    }

    return (
        <div className="flex items-center justify-between h-10">
            <h1 className='text-xl font-bold text-zinc-800 text-left'>
                Github Profiles
            </h1>
            <form className='text-zinc-800 w-64 text-right' onSubmit={handleSubmit}>
                <input type='text' placeholder='Search profile...' className="rounded-sm w-1/2" />
                <button type="submit" className="bg-cyan-400 rounded-sm px-2 ml-1">Search</button>
            </form>
        </div>
    )
}
export default Navbar;