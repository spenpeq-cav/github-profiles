import InfoContainer from "./InfoContainer"

type MyProjectsProps = {
    repoData: never[]
    active: boolean
}

function MyProjects(props: MyProjectsProps) {

    return (
        <>
            { props.active ? <InfoContainer>
                <h2 className="font-bold pb-6 text-lg">My Projects</h2>
                <div className="grid grid-cols-10 text-sm">
                    <h3 className="font-semibold pb-2 col-span-5">Name</h3>
                    <h3 className="font-semibold pb-2 col-span-3">Language</h3>
                    <h3 className="font-semibold pb-2 col-span-1 text-center">Forks</h3>
                    <h3 className="font-semibold pb-2 col-span-1 text-center">Watchers</h3>
                </div>
                {props.repoData.map((repo: any) => (
                    <div key={repo.id} className="text-sm border-b-2 border-slate-600 py-2 grid grid-cols-10">
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