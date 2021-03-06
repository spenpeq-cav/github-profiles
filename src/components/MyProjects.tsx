import InfoContainer from "./InfoContainer"

type MyProjectsProps = {
    repoData: never[]
    active: boolean
}

function MyProjects(props: MyProjectsProps) {

    return (
        <>
            { props.active ? <InfoContainer>
                <h2 className="font-bold pb-6 text-xl text-zinc-900">My Projects</h2>
                <div className="grid grid-cols-10 text-lg text-zinc-900">
                    <h3 className="font-semibold pb-2 col-span-5">Name</h3>
                    <h3 className="font-semibold pb-2 col-span-3">Language</h3>
                    <h3 className="font-semibold pb-2 col-span-1 text-center">Forks</h3>
                    <h3 className="font-semibold pb-2 col-span-1 text-center">Watchers</h3>
                </div>
                {props.repoData.map((repo: any) => (
                    <div key={repo.id} className="text-md border-b-2 border-zinc-900 border-opacity-40 py-2 grid grid-cols-10 text-zinc-900">
                        <p className="col-span-5">{repo.name}</p>
                        <p className="col-span-3">{repo.language}</p>
                        <p className="col-span-1 text-center">{repo.forks}</p>
                        <p className="col-span-1 text-center">{repo.watchers}</p>
                    </div>
                ))}
            </InfoContainer> : <></>}
        </>
    )
}
export default MyProjects